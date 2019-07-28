import axios from 'axios';
import {GETSONGLYRIC, GETSONGPLAY,GETSONGDETAIL} from "../actionType/player"

export default {
    getSongPlay(id){
        return (dispatch)=>{
                axios.get("/wymusic/song/url?id="+id)
                    .then(({data})=>{
                        dispatch({
                            type:GETSONGPLAY,
                            payload:{
                                song:data.data
                            }
                        })
                    })
        }
    },
    getSongDetail(ids){
        return (dispatch)=>{
            axios.get("/wymusic/song/detail?ids="+ids)
                .then(({data})=>{
                    dispatch({
                        type:GETSONGDETAIL,
                        payload:{
                            songDetail:data.songs,
                        }
                    })
                })
        }
    },
    getSongLyric(id){
        function parseLyric(lrc) {
            if(lrc === '') return -1;
            var lyrics = lrc.split("\n");
            var lrcObj = {};
            var lrcList = [];
            for(var i=0;i<lyrics.length;i++){
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if(!timeRegExpArr)continue;
                var clause = lyric.replace(timeReg,'');
                for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
                    var t = timeRegExpArr[k];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                        sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj[time] = clause;
                }
            }
            for (var key in lrcObj){
                var temp = {
                    id:"",
                    type:""
                };
                temp.id=key;
                temp.type=lrcObj[key];
                lrcList.push(temp);
            }
            return lrcList;
        }
        return (dispatch)=>{
            axios.get("/wymusic/lyric?id="+id)
                .then(({data})=>{
                    let lrcList = [];
                    if(data.lrc)
                        lrcList = parseLyric(data.lrc.lyric)
                    dispatch({
                        type:GETSONGLYRIC,
                        payload:{
                            songLyric:lrcList,
                        }
                    })
                })
        }
    }
}
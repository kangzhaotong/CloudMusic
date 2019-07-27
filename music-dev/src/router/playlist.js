import MusicListDetail from '../views/find/MusicListDetail'
import TopMusicList from "../views/find/TopMusicList";
export default[
    {
        path:"/top/playlist",
        exact:true,
        component:TopMusicList,
        nameStr:"获取歌单（默认cat=全部）",
        isAuthorization:true
    },
    {
        path:"/playlist/detail",
        exact:true,
        component:MusicListDetail,
        nameStr:"歌单详情（需要传id）",
        isAuthorization:true
    }
]
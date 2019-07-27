import PlayPage from '../views/common/PlayPage'
import TopSongList from "../views/find/TopSongList";
export default[
    {
        path:"/top/song",
        exact:true,
        component:TopSongList,
        nameStr:"最新音乐（取id）",
        isAuthorization:true
    },
    {
        path:"/song/url",
        exact:true,
        component:PlayPage,
        nameStr:"获取音乐url（需要传歌曲id）",
        isAuthorization:true
    }
]
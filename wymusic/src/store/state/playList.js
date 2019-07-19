/* 歌单、专辑 */
export default {
    playListDetail: {
        tracks:[],
        coverImgUrl: "",
        name: "",
        creator: {
            avatarUrl: "",
            nickname: ""
        },
        subscribed: false,
        description: "",
        commentCount: "",
        shareCount: "",
        subscribers: [],
        trackCount: "",
        subscribedCount: ""
    },
    albumList: {
        album: {
            blurPicUrl: "",
            name: "",
            artist: {
                name: ""
            },
            publishTime: "",
            description: "",
            info: {
                commentCount: 0,
                shareCount: 0
            },
            size: 0
        },
        songs: []
    }
}
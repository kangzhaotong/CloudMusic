import Radio from "../views/RadioStation";
import RadioClassification from "../components/discover/RadioStation/RadioClassification";
import RadioRank from "../components/discover/RadioStation/RadioRank";
import MusicClass from "../components/discover/RadioStation/MusicClass";
import Concentrate from "../components/discover/RadioStation/Concentrate";

export default [
    {
        path: '/discover/radio',
        component: Radio,
        exact: true
    },
    {
        path: '/discover/radio/radioclassification',
        component: RadioClassification
    },
    {
        path:"/discover/radio/radiorank",
        component:RadioRank
    },{
        path:"/discover/radio/concentrate",
        component:Concentrate
    },
    {
        path:"/discover/radio/musicclass",
        component:MusicClass
    }
]
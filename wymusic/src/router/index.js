import Radio from "../views/RadioStation";
import RadioClassification from "../components/discover/RadioStation/RadioClassification";
import RadioRank from "../components/discover/RadioStation/RadioRank";
import MusicClass from "../components/discover/RadioStation/MusicClass";
import Concentrate from "../components/discover/RadioStation/Concentrate";

export default [
    {
        path: '/radio',
        component: Radio,
        exact: true
    },
    {
        path: '/radio/radioclassification',
        component: RadioClassification
    },
    {
        path:"/radio/radiorank",
        component:RadioRank
    },{
        path:"/radio/concentrate",
        component:Concentrate
    },
    {
        path:"/radio/musicclass",
        component:MusicClass
    }
]
export default function  date(v){
            var time = new Date(v);
            var timeStr = time.getFullYear()+"年"+
                (time.getMonth()+1).toString().padStart(2,"0")+"月"+
                time.getDate().toString().padStart(2,"0")+ " "+
                time.getHours().toString().padStart(2,"0")+":"+
                time.getMinutes().toString().padStart(2,"0")+":"+
                time.getSeconds().toString().padStart(2,"0");
            return timeStr;
        }
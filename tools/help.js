const md5=require("md5");
module.exports.enmd5=function(str){
  return md5(str+"www.kzt.ink");
}

module.exports.getNowTime=function() {
    var nowTime = new Date();
    var timeStr = nowTime.getFullYear()+"-"+
        (nowTime.getMonth()+1).toString().padStart(2,"0")+"-"+
        nowTime.getDate().toString().padStart(2,"0")+ " "+
        nowTime.getHours().toString().padStart(2,"0")+":"+
        nowTime.getMinutes().toString().padStart(2,"0")+":"+
        nowTime.getSeconds().toString().padStart(2,"0");
    return timeStr;
}


//module.exports.cloneObject=function (targetObj,sourceObj){
        //         // 获取sourceObj的所有属性名,生成一个数组
        //         var names=Object.getOwnPropertyNames(sourceObj);
        //         //遍历所有属性名
        //         for(var i=0;i<names.length;i++){
        //             // 获取当前这个属性名的描述对象
        //             var disc=Object.getOwnPropertyDescriptor(sourceObj,names[i]);
        //             // disc.value就是该属性的属性值,值如果是对象,但是不是null,那么就需要做深复制
        //             if(typeof disc.value==="object" && disc.value!==null){
        //                 var obj=new disc.value.constructor();
        //                 // 这里disc.value就是该属性的属性值,如果这个值是一个对象,我们需要对
        //                 // 该属性值拆解深复制
        //                 obj=cloneObject(obj,disc.value);
        //                 Object.defineProperty(targetObj,names[i],{
        //                     writable:disc.writable,
        //                     configurable:disc.configurable,
        //                     enumerable:disc.enumerable,
        //                     value:obj
        //                 })
        //             }else{
        //                 // 给targetObj定义当前循环的属性名,属性值和属性描述的对象都是源对象对应的描述对象
        //                 Object.defineProperty(targetObj,names[i],disc);
        //             }
        //         }
        //         return targetObj;
        //     }
/*
* res:响应对象
* ok:返回的编码 -1，失败
* msg:消息*/
module.exports.json = function (res,ok=-1,msg="网络连接错误") {
    res.json({
        ok,
        msg
    })
}
// 生成指定范围的随机数
module.exports.randomNum = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
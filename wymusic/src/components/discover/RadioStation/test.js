
// let content = "So baby gir🍉\n别叫我达芬奇🍟\n让我唱首melody🍧\n没有太多的问题🍰\n要不要和我在一起🍭\nOh 别叫我达芬奇🍱";
//
// function jiexi(content) {
//     let lyrics = content.split("\n");
//     let lrcObj = {};
//     let list = [];
//     lyrics.forEach((item,index)=>{
//         lrcObj[index] = item
//     })
//     for (let key in lrcObj){
//         let temp = {
//             comment:""
//         };
//         temp.comment=lrcObj[key];
//         list.push(temp);
//     }
//     return list
// }
// console.log(jiexi(content))

// var a = ['a','b','c']
// var obj = {}
// a.forEach((item,index)=>{obj[index] = item})
// console.log(obj)



Object.prototype.deepCloneObject=function (targetObject,sourceObject){
    var names = Object.getOwnPropertyNames(sourceObject);
    for(var i = 0;i < names.length;i++){
        var desc = Object.getOwnPropertyDescriptor(sourceObject,names[i]);
        if(typeof (desc.value) === 'object'&& desc.value !== null){
            var obj = new desc.value.constructor();
            Object.defineProperty(targetObject,names[i],{
                enumerable:desc.enumerable,
                writable:desc.writable,
                configurable:desc.configurable,
                value:obj
            });
            deepCloneObject(obj,desc.value);
        }else {
            Object.defineProperty(this,names[i],desc);
        }
    }
    return this;
}

var objs = {
    bcd:{
        lfgf:35,
    },
    aef:20
}
var obj = {};
obj.deepCloneObject(objs);
console.log(obj);

class Main{//它是一个功能性的主程序
constructor(){

}
static getInstance(){
    if(!Main._instance){
        var main=new Main()
        Object.defineProperty(Main,"_instance",{
            get:function(){
                return main;
            }
        })
    }
    return Main._instance;
}//在这里为了就是让main也就是被new Main（）的对象不被改写，当没有的时候他就创建一个main当有的时候他就不会在创建了
//，这样的话就就保证了全局只有一个main对象，创建这个main对象以后在任何一个地方去调用它都可以完成这个内容的调用
//下面的方法他们里面的this都是指向的是当前的对象
init(){
    this.zoom=new MagnifyingGlass();//在这里this.room就是放大镜
    return this;
}
appendTo(parent){
    this.zoom.appendTo(parent);//在这里就是调用了放大镜的appendTo的方法
}
}
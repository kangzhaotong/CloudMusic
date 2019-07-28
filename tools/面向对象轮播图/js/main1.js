var Utils=(function () {
    return {
        cloneObjectPro:function (target,source) {
            if(!target || !source) return;
            var names=Object.getOwnPropertyNames(source);
            for(var i=0;i<names.length;i++){
                var pro=Object.getOwnPropertyDescriptor(source,names[i]);
                if(typeof(pro.value)==="object" && pro.value){
                    var obj={};
                    Object.defineProperty(target,names[i],{
                        value:obj,
                        writable:pro.writable,
                        enumerable:pro.enumerable,
                        configurable:pro.configurable
                    });
                    this.cloneObjectPro(obj,pro.value);
                }else{
                    Object.defineProperty(target,names[i],pro);
                    console.log(target);
                }
            }
        },
        cloneObject:function (target,source) {
            for(var str in source){
                target[str]=source[str];
            }
        },
        loadImg:function (list,target) {
            var imgList=[];
            var n=0;
            var img=new Image();
            img.addEventListener("load",loadHandler);
            img.src=list[0];
            function loadHandler(e) {
                imgList.push(this.cloneNode(false));
                n++;
                if(n===list.length){
                    var evt=new Event(Utils.IMAGE_LOAD_FINISH);
                    evt.list=imgList;
                    evt.self=target;
                    window.dispatchEvent(evt);
                }else{
                    this.src=list[n];
                }
            }
        },
        IMAGE_LOAD_FINISH:"image_load_finish"
    }
})();

(function (win) {
    function ProductIcon() {
       this.getInstance();
       this.init();
    }
    ProductIcon.prototype={
        styles:{
            width:"240px",
            height:"50px",
            border:"1px solid #000000",
            float:"left",
            padding:"5px"
        },
        imgStyle:{
            width:"50px",
            float:"left"
        },
        titleStyle:{
            width:"180px",
            height:"30px",
            textAlign:"center",
            float:"left",
            padding:"0px",
            margin:"0px"
        },
        contentStyle:{
            textAlign:"center"
        },
        img:null,
        titleCon:null,
        contentCon:null,
        _instance:null,
        //单例模式
        getInstance:function () {
            if(!this._instance){
                this._instance=document.createElement("div");
            }
            return this._instance;
        },
       init:function () {
            Utils.cloneObject(this._instance.style,this.styles);
            this.img=new Image();

           this._instance.appendChild(this.img);
           Utils.cloneObject(this.img.style,this.imgStyle);
            this.titleCon=document.createElement("h4");
           this._instance.appendChild(this.titleCon);
            Utils.cloneObject(this.titleCon.style,this.titleStyle);
           this.contentCon=document.createElement("div");
           this._instance.appendChild(this.contentCon);
           Utils.cloneObject(this.contentCon.style,this.contentStyle);

       },
        set src(value){
            this.img.src=value;
        },
        get src(){
            return this.img.src;
        },
        set title(value){
            this.titleCon.textContent=value;
        },
        get title(){
            return this.titleCon.textContent;
        },
        set content(value){
            this.contentCon.textContent=value;
        },
        get content(){
            return this.contentCon.textContent;
        }
    };
    win.ProductIcon=ProductIcon;
})(window);
(function (win) {
    function Carousel() {
        this.getInstance();
        this.init();
    }
    Carousel.prototype={
        carouselStyle:
        {
            position: "relative",
            overflow: "hidden",
            margin: "auto"
        },
        imgConStyle:
         {
             position: "absolute"
         },
         leftStyle:
         {
            left: "5px",
            position: "absolute"
         },
        rightStyle:
         {
             right: "5px",
             position: "absolute"
         },
        liStyle:
        {
            width: "16px",
            height: "16px",
            borderRadius: "8px",
            border: "1px solid #FF0000",
            backgroundColor: "rgba(255,255,255,0.4)",
            marginLeft: "10px",
            float: "left"
        },
        ulStyle:
         {
            listStyle:"none",
            bottom: "10px",
            position: "absolute",
             padding:"0px",
             margin:"0px"
         },
        _instance:null,
        _srcList:[],
        _width:960,
        _height:320,
        position:0,
        dic:"",
        time:360,
        carouselAuto:true,
        auto:false,
        bool:false,
        imgCon:null,
        uls:null,
        leftBn:null,
        rightBn:null,
        preLi:null,
        imgList:[],
        set srcList(value){
            this._srcList=value;
            if(!this.leftBn || !this.rightBn){
                value=value.concat(["img/left.png","img/right.png"])
            }
            for(var i=0;i<this.imgList.length;i++){
                this.imgList[i]=null;
            }
            this.imgList.length=0;
            Utils.loadImg(value,this);

        },
        get srcList(){
            return this._srcList;
        },
        set width(value){
            this._width=value;
            this._instance.style.width=value+"px";
            this.imgCon.style.width=value+"px";
            if(this.imgCon.children.length>0){
                this.imgCon.children[0].style.width=value+"px";
            }
            if(this.uls.children.length>0){
                var ulWidth=(parseInt(this.liStyle.width)+parseInt(this.liStyle.marginLeft))*this.srcList.length;
                this.uls.style.left=(this.width-ulWidth)/2+"px";
            }
        },
        get width(){
            return this._width;
        },
        set height(value){
            this._height=value;
            this._instance.style.height=value+"px";
            this.imgCon.style.height=value+"px";
            if(this.imgCon.children.length>0){
                this.imgCon.children[0].style.height=value+"px";
            }
            if(this.leftBn){
                this.leftBn.style.top=this.rightBn.style.top=(value-this.rightBn.height)/2+"px";
            }
        },
        get height(){
            return this._height;
        },
        getInstance:function () {
            if(!this._instance){
                this._instance=document.createElement("div");
            }
            return this._instance;
        },
        init:function () {
            this.imgCon=document.createElement("div");
            this.uls=document.createElement("ul");
            Utils.cloneObject(this._instance.style,this.carouselStyle);
            Utils.cloneObject(this.imgCon.style,this.imgConStyle);
            Utils.cloneObject(this.uls.style,this.ulStyle);
            this._instance.appendChild(this.imgCon);
            this._instance.appendChild(this.uls);
            win.addEventListener(Utils.IMAGE_LOAD_FINISH,this.finishImgHandler);

            this._instance.self=this;
            this._instance.addEventListener("mouseenter",this.mouseHandler);
            this._instance.addEventListener("mouseleave",this.mouseHandler);
        },
        clearCon:function (elem) {
            var len=elem.children.length;
            for(var i=0;i<len;i++){
                elem.removeChild(elem.children[0]);
            }
        },
        finishImgHandler:function (e) {
            var lrList=[];
           for(var i=0;i<e.list.length;i++){
               if(e.list[i].src.indexOf("left.png")===-1 && e.list[i].src.indexOf("right.png")===-1){
                   e.self.imgList.push(e.list[i])
               }else{
                   lrList.push(e.list[i])
               }
           }
            e.self.initImage();
            e.self.initLi();
            e.self.initLR(lrList);

        },
        initImage:function () {
            this.clearCon(this.imgCon);
            var img=this.imgList[0];
            this.imgCon.appendChild(img);
            img.style.width=this.width+"px";
            img.style.height=this.height+"px";

        },
        initLi:function () {
            this.clearCon(this.uls);
            for(var i=0;i<this.imgList.length;i++){
                var li=document.createElement("li");
                li.n=i;
                li.self=this;
                Utils.cloneObject(li.style,this.liStyle);
                li.addEventListener("click",this.liClickHandler);
                this.uls.appendChild(li);
            }
            var ulWidth=(parseInt(this.liStyle.width)+parseInt(this.liStyle.marginLeft))*this.imgList.length;
            this.uls.style.left=(this.width-ulWidth)/2+"px";
            this.changeLi();
        },
        initLR:function (list) {
            if(this.leftBn && this.rightBn) return;
            this.leftBn=list[0];
            this.rightBn=list[1];
            this._instance.appendChild(this.leftBn);
            this._instance.appendChild(this.rightBn);
            Utils.cloneObject(this.leftBn.style,this.leftStyle);
            Utils.cloneObject(this.rightBn.style,this.rightStyle);
            this.leftBn.self=this;
            this.rightBn.self=this;
            this.leftBn.addEventListener("click",this.LeftAndRightClickHandler);
            this.rightBn.addEventListener("click",this.LeftAndRightClickHandler);

            if(this.width>0){
                this._instance.style.width=this.width+"px";
                this.imgCon.style.width=this.width+"px";
                if(this.imgCon.children.length>0){
                    this.imgCon.children[0].style.width=this.width+"px";
                }
                if(this.uls.children.length>0){
                    var ulWidth=(parseInt(this.liStyle.width)+parseInt(this.liStyle.marginLeft))*this.srcList.length;
                    this.uls.style.left=(this.width-ulWidth)/2+"px";
                }
            }
            if(this.height>0){
                this._instance.style.height=this.height+"px";
                this.imgCon.style.height=this.height+"px";
                if(this.imgCon.children.length>0){
                    this.imgCon.children[0].style.height=this.height+"px";
                }
                if(this.leftBn){
                    this.leftBn.style.top=this.rightBn.style.top=(this.height-this.rightBn.height)/2+"px";
                }
            }
        },
        createImg:function () {
            this.imgCon.style.width=this.width*2+"px";
            var img=new Image();
            img.src=this.srcList[this.position];
            if(this.dic==="left"){
                this.imgCon.appendChild(img);
                this.imgCon.style.left="0px";
            }else if(this.dic==="right"){
                this.imgCon.insertBefore(img,this.imgCon.firstElementChild);
                this.imgCon.style.left=-this.width+"px";
            }
            img.style.width=this.width+"px";
            img.style.height=this.height+"px";
        },
        changeLi:function () {
            if(this.preLi){
                this.preLi.style.backgroundColor="rgba(255,255,255,0.4)"
            }
            this.uls.children[this.position].style.backgroundColor="rgba(255,0,0,0.4)";
            this.preLi=this.uls.children[this.position];
        },
        LeftAndRightClickHandler:function (e) {

            if(this.self.bool) return;
            if(this.self.leftBn===this){
                this.self.position--;
                if(this.self.position<0){
                    this.self.position=this.self.srcList.length-1;
                }
                this.self.dic="right";
            }else if(this.self.rightBn===this){
                this.self.position++;
                if( this.self.position> this.self.srcList.length-1){
                    this.self.position=0;
                }
                this.self.dic="left";
            }
            this.self.createImg();
            this.self.bool=true;
            this.self.changeLi();
        },
        liClickHandler:function (e) {
            if(this.self.bool) return;
            if(this.n<this.self.position){
                this.self.dic="right";
            }else if(this.n>this.self.position){
                this.self.dic="left";
            }else{
                return;
            }
            this.self.position=this.n;
            this.self.createImg();
            this.self.bool=true;
            this.self.changeLi();
        },
        mouseHandler:function (e) {
            if(e.type==="mouseenter"){
                this.self.auto=false;
            }else if(e.type==="mouseleave"){
                if(!this.self.carouselAuto) return;
                this.self.auto=true;
            }
        },
        upData:function () {
            if(this.auto){
                this.time--;
                if(this.time<=0){
                    this.position++;
                    if( this.position> this.srcList.length-1){
                        this.position=0;
                    }
                    this.dic="left";
                    this.createImg();
                    this.bool=true;
                    this.changeLi();
                    this.time=360;
                }
            }else{
                this.time=360;
            }

            if(!this.bool) return;
            if(this.dic==="left"){
                this.imgCon.style.left=this.imgCon.offsetLeft-20+"px";
                if(this.imgCon.offsetLeft<=-this.width){
                    this.imgCon.removeChild(this.imgCon.firstElementChild);
                    this.imgCon.style.left="0px";
                    this.bool=false;
                }
            }else if(this.dic==="right"){
                this.imgCon.style.left=this.imgCon.offsetLeft+20+"px";
                if(this.imgCon.offsetLeft>=0){
                    this.imgCon.removeChild(this.imgCon.lastElementChild);
                    this.bool=false;
                }
            }
        }
        
    };
    win.Carousel=Carousel;
})(window);


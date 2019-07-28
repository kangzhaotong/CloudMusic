class MagnifyingGlass{
    constructor(parent){
    //    this._parent=parent;
       this.elem=this.creatGlass(parent);
    }
    appendTo(parent){
        if(!this.elem) return;
        parent.appendChild(this.elem);
        return this.elem;
    }
creatGlass(){
    if(this.elem) return this.elem;
    var div=Utils.createElement("div",{
        backgroundColor:"red",
        position:"relative",
    });
   this.minDiv=this.cerateMindiv(div);
    this.zoomDiv=this.createZoomdiv(div);
    // this.zoomDiv.style.left=this.minDiv.offsetLeft+this.minDiv.offsetWidth+"px";
    return div;
}
cerateMindiv(parent){
var div=Utils.createElement("div",{
position:"relative",
width:"450px",
height:"450px",
border:"1px solid #ccc",
float:"left"
});
parent.appendChild(div);
return div;
}
createZoomdiv(parent){
    if(this.zoomDiv)return this.zoomDiv;
    var div=Utils.createElement("div",{
        backgroundColor:"orange",
        position:"relative",
        width:"540px",
        height:"540px",
        border:"1px solid #ccc",
        float:"left"
    });
    parent.appendChild(div);
    return div; 
}
}
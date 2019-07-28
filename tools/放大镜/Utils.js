class Utils{
  static createElement(type,style){
      var elem=document.createElement("div");
      Object.assign(elem.style,style);
      return elem;
  }
}
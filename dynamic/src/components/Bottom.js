import React from "react"
export default function Botton(props){
    return(
        <nav className="bar bar-tab">
<a className="tab-item external active" >
    <span className="icon icon-home"></span>
    <span className="tab-label" >首页</span>
</a>
<a className="tab-item external" >
    <span className="icon icon-star"></span>
    <span className="tab-label" onClick={()=>{props.history.push("/my")}}>收藏</span>
</a>
<a className="tab-item external" >
    <span className="icon icon-settings"></span>
    <span className="tab-label">设置</span>
</a>
</nav>
    )
}
import React from 'react'
import "./search.css"
// import "@/assets/css/home.css"
class Search extends React.Component {
    render() {
        return (
            <div id="header11">
                <i className="iconfont iconhuatong"></i>
                <div className="search" onClick={this.seaHandler} >
                    <input type="text" placeholder="大家都在搜 隔壁老樊" />
                    <i className="iconfont iconfangdajing"></i>
                </div>
                <i className="iconfont  iconyinlebofangxuanlvjiezou"></i>
            </div>
        )
    }
    seaHandler(){
        this.props.history.push("/search");
    }
}
export default Search
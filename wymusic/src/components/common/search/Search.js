import React from 'react'
import "./search.css"
class Search extends React.Component {
    render() {
        return (
            <div id="header">
                <i className="iconfont icon-huatong"></i>
                <div className="search" onClick={this.seaHandler} >
                    <input type="text" defaultValue="大家都在搜 隔壁老樊" />
                    <i className="iconfont icon-fangdajing"></i>
                </div>
                <i className="iconfont icon-gedan"></i>
            </div>
        )
    }
}
export default Search
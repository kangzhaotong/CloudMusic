import React,{ Component } from 'react';
import {connect} from 'react-redux';
import actionCreate from '../../store/actionCreator';
import "../../assets/css/search.css"
class search extends Component{
    constructor(props){
        super(props);
    }
    go(){
        this.props.history.go(-1);
    }
    render(){
        let list=this.props.discover.list;
        // let his=this.props.discover.his;
        return(
            <div id="search1">
           {/*搜索*/}
                <div className="searchTop">
                    <input type="text" placeholder="那个女孩 最近很火哦" />
                    <i className="iconfont icon-fangdajing"></i>
                    <span onClick={this.go.bind(this)}>取消</span>
                </div>
                {/*<div className="history">*/}
                        {/*<span>搜索历史</span>*/}
                        {/*<h5>*/}
                            {/*<span v-if="bool">暂无搜索历史</span>*/}
                            {/*his.map((item,index)=>{*/}
                                {/*retrun (<p className='content' key={index}>*/}
                                       {/*<span>{item}</span>*/}

                                    {/*</p>)*/}
                        {/*})*/}
                        {/*</h5>*/}
                {/*</div>*/}
                <div className='hotSearch'>
                    <span>热搜榜</span>
                    {
                        list.map((item,index) => {
                            return (<p className='content' key={index}>
                                
                                    <span>{index+1}</span>

                                    <span>{item.searchWord}</span>
                                    <span>{item.score}</span>

                                <span>{item.content}</span>
                            </p>)
                        })
                    }
                </div>
           </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getHot();
    }

}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        getHot(){
            dispatch(actionCreate.getHot())
        }

    }
};
export default connect(mapState,mapAction)(search);
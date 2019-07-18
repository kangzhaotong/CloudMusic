import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import actionCreate from '../../store/actionCreator/AlbumListCreator.js';
import "../../assets/css/CD.css"

class CD extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.getAlbum();
}
  back(){
    this.props.history.go(-1);
  }
  render() {
    let AlbumPut=this.props.AlbumList.AlbumPut    
    return (
          <div id="CD">
            <div className="CDTop">
              <i className="iconfont iconarrow-right" onClick={this.back.bind(this)}></i>
              <span>新碟</span>
              <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
            </div>
            
            <div className="wrap">
              <span>数字专辑</span>
              <span onClick={() => {
                this.props.history.push('/album/')
            }}>更多热销专辑</span>
              <div className="con">
                {
                  AlbumPut.map( (item,index) => {
                      return <p className='content' key={index}>                         
                        <img   src={item.blurPicUrl} alt="完美" />
                        <span>{item.name}</span>
                        
                          {
                            item.artists.map((i,index)=>{
                              return (<span key= {index} className="nei">{i.name}</span>)
                            })
                          }                      
                      </p>
                  })
                }
              </div>
            </div>
            <div className="line"></div>
            
            {/*本周新碟*/ }
            <div className="newCD">
                <span>本周新碟</span>
                <div className="new">
                {
                  AlbumPut.map( (item,index) => {
                      return <p className='content' key={index}>                         
                        <img   src={item.blurPicUrl} alt="完美" />
                        <span>{item.name}</span>
                        
                          {
                            item.artists.map((i,index)=>{
                              return (<span key= {index} className="nei">{i.name}</span>)
                            })
                          }                      
                      </p>
                  })
                }
              </div>
            </div>
          </div>
      )
  }

}

let mapState=(state)=>state;
let mapAction=(dispatch)=>{
  return {
    getAlbum(){
      dispatch(actionCreate.getAlbum())
    }
  }
};
export default connect(mapState,mapAction)(withRouter(CD));
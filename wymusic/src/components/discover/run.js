import React,{ Component } from 'react';
import "../../assets/css/run.css"
import {connect} from 'react-redux'
import actionCreate from '../../store/actionCreator'

class run extends Component{

    render(){
        let run=this.props.discover.run;
        return(
            <div id="tuijian">

                {/*每日推荐*/}
                音乐
                <div className="tuijianc">


                        {
                            run.map((item,index) => {
                                return (<p className='content' key={index}>
                                    <audio  src={item.url} controls={'controls'} autoPlay={'autoPlay'}></audio>
                                </p>)
                            })
                        }



                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getRun();
    }

}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        getRun(){
            dispatch(actionCreate.getRun())
        }

    }
};
export default connect(mapState,mapAction)(run);
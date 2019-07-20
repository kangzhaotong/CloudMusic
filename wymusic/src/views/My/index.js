import React, { Component } from 'react'
import Slider from '../../components/my/slide/slider.js'
class My extends Component {
    constructor(props){
        super(props)
       
    }
    render() {
        return (
            <div>
                <Slider {...this.props}></Slider>
            </div>
        )
    }
}
export default My;

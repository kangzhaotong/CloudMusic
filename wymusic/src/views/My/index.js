import React, { Component } from 'react'
import Slider from '../../components/my/slide/slider.js'
class My extends Component {
    render() {
        return (
            <div>
                <Slider {...this.props}></Slider>
            </div>
        )
    }
}
export default My;

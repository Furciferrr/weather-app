import React from 'react'
import Slider from "react-slick";
import TimeWeatherItem from './TimeWeatherItem';
import classes from './timeWeather.module.css'

const SimpleSlider = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 10,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className={classes.timeWeatherItem} >
            
                {props.state.list.filter((it, index) => index < 12).map((item, index) => {
                    return <TimeWeatherItem key={index} time={index === 0 ? 'Now' : props.getWeekDay(item.dt, { hour: 'numeric' })}
                        degree={Math.round(item.main.temp)} />
                })}
                {/* <div className='clear: both;'></div> */}
           
        </Slider>
    );
}

export default SimpleSlider
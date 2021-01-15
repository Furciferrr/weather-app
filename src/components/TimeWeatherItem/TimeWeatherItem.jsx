import React from 'react'
import snowFlake from './../../img/snowFlake.svg'
import classes from './timeWeather.module.css'

class TimeWeatherItem extends React.Component {

    render() {
        
        return (
           <div className={classes.timeWeatherItem}>
               <div>{this.props.time}</div>
               <img src={snowFlake} alt='icon'></img>
               <div>{this.props.degree}&#176;</div>
           </div>
                 
                
        )
    }
}



export default TimeWeatherItem
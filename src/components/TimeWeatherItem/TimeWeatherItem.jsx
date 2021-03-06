import React from 'react'
import classes from './timeWeather.module.css'

class TimeWeatherItem extends React.Component {

    render() {
        
        
        return (
           <div className={classes.timeWeatherItem}>
               <div>{this.props.time}</div>
               <img src={this.props.weatherImage} alt={this.props.weatherDiscription} ></img>
               <div>{this.props.degree}&#176;</div>
           </div>
                 
                
        )
    }
}



export default TimeWeatherItem
import React from 'react'
import classes from './weekDayWeather.module.css'

class WeekDayWeather extends React.Component {

    render() {
        
        return (
           <div className={classes.weekDayWeatherItem}>
            <div className={classes.day}>{this.props.weekDay}</div>
            <div><img src={this.props.weatherImage} alt='weatherImage'/></div>
            <div>{this.props.degreeDay}</div>
            <div>{this.props.degreeNight}</div>
           </div>
                 
                
        )
    }
}



export default WeekDayWeather
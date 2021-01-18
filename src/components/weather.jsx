import React from 'react'
import TimeWeatherItem from './TimeWeatherItem/TimeWeatherItem'
import classes from './weather.module.css'
import WeekDayWeather from './weekDayWeather/WeekDayWeather'
import FooterData from './footerData/FooterData'

class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            itemAmount: 10
        }

    }

    
    
    render() {
    const listDaysDegree = this.props.state.list.filter(list => list.dt_txt.includes('15:00:00'))
   
    if (this.props.getWeekDay(this.props.state.list[0].dt,{ hour: 'numeric', hour12: false}) < 12 || 24) {
        listDaysDegree.pop()
    } 
    if (this.props.getWeekDay(this.props.state.list[0].dt, { weekday: 'long' }) === this.props.getWeekDay(listDaysDegree[0].dt, { weekday: 'long' })) {
        listDaysDegree.shift()
        
    }
    
    
   
    
        return (
            <div>
                    <div className={classes.appWrapper}>
                        <div>
                            <h3>{this.props.state.city.name}</h3>
                            <div>{this.props.state.list[0].weather[0].description}</div>
                            <h1>{Math.round(this.props.state.list[0].main.temp)}&#176;</h1>
                            <h5>H: {Math.round(this.props.state.list[0].main.temp_max)}&#176;
                                L: {Math.round(this.props.state.list[0].main.temp_max)}&#176;</h5>

                        </div>

                        {<div className={classes.timeWrapper}>
                            
                            {this.props.state.list.filter((it, index) => index < this.state.itemAmount).map((item, index) => {
                                return <TimeWeatherItem key={index} 
                                    time={index === 0 ? 'Now' : this.props.getWeekDay(item.dt, { hour: 'numeric', hour12: false })}
                                    degree={Math.round(item.main.temp)} 
                                    weatherImage={ this.props.weatherImageData[item.weather[0].icon] || this.props.weatherImageData.default }
                                    weatherDiscription={item.weather[0].description}/>
                            })}
                            <div className={classes.clear}></div>
                        </div>}
                        
                        <div  className={classes.weekDayWrapper}>
                        { listDaysDegree.map((item, index) => {
                                return <WeekDayWeather key={index} weekDay={this.props.getWeekDay(item.dt, { weekday: 'long' })}
                                weatherImage={this.props.weatherImageData[item.weather[0].icon] || this.props.weatherImageData.default}
                                weatherDiscription={item.weather[0].description}
                                degreeDay={Math.round(item.main.temp)}
                                degreeNight={Math.round(this.props.state.list.filter(el=> this.props.getWeekDay(el.dt, { weekday: 'long' }) === 
                                this.props.getWeekDay(item.dt + 86400, { weekday: 'long' }) &&  el.dt_txt.includes("03:00:00"))[0].main.temp)}/>
                        })} 
                        </div>
                        <div>
                            <FooterData
                                 headingLeft="SUNRISE"
                                 valueLeft={new Date (this.props.state.city.sunrise * 1000).toLocaleString('ru', { hour: 'numeric', minute: "numeric" })}
                                 headingRight="SUNSET"
                                 valueRight={new Date (this.props.state.city.sunset * 1000).toLocaleString('ru', { hour: 'numeric', minute: "numeric" })} />
                            <FooterData
                                 headingLeft="COORDINATES"
                                 valueLeft={`Lat: ${this.props.state.city.coord.lat.toFixed(2)} Lon: ${this.props.state.city.coord.lon.toFixed(2)}`}
                                 headingRight="HUMIDITY"
                                 valueRight={`${this.props.state.list[0].main.humidity} %`} />     
                             <FooterData
                                 headingLeft="WIND"
                                 valueLeft={`${this.props.state.list[0].wind.speed} km/hr`}
                                 headingRight="FEELS LIKE"
                                 valueRight={this.props.state.list[0].main.feels_like} 
                                 />       
                            <FooterData
                                 headingLeft="PRECIPITION"
                                 valueLeft={this.props.state.list[0].wind.speed}
                                 headingRight="PRESSURE"
                                 valueRight={`${this.props.state.list[0].main.pressure} hPa`} 
                                 />      
                            <FooterData
                                 headingLeft="VISIBILITY"
                                 valueLeft={`${this.props.state.list[0].visibility / 1000} km`}
                                 headingRight="UV INDEX"
                                 valueRight={this.props.state.list[0].main.feels_like} 
                                 />     
                        </div>
                        
                    </div>
            </div>
        )
    }
}



export default Weather
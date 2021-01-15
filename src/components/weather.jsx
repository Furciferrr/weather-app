import React from 'react'
import TimeWeatherItem from './TimeWeatherItem/TimeWeatherItem'
import classes from './weather.module.css'
import WeekDayWeather from './weekDayWeather/WeekDayWeather'
import snowFlake from './../img/snowFlake.svg'
import FooterData from './footerData/FooterData'

class Weather extends React.Component {
    
    render() {
    const listDaysDegree = this.props.state.list.filter(list => list.dt_txt.includes('15:00:00'))
    if (this.props.getWeekDay(this.props.state.list[0].dt,{ hour: 'numeric' }) < 12) {
        listDaysDegree.pop()
    } else if (this.props.getWeekDay(this.props.state.list[0].dt, { weekday: 'long' }) !== this.props.getWeekDay(listDaysDegree[0].dt, { weekday: 'long' })) {
        listDaysDegree.unshift(this.props.state.list[0])
        listDaysDegree.pop()
    }
     
        return (
            <div>
                    <div>
                        <div>
                            <h3>{this.props.state.city.name}</h3>
                            <div>{this.props.state.list[0].weather[0].description}</div>
                            <h1>{Math.round(this.props.state.list[0].main.temp)}</h1>
                        </div>

                        <div className={classes.timeWrapper}>
                            {this.props.state.list.filter((it, index) => index < 10).map((item, index) => {
                                return <TimeWeatherItem key={index} time={index === 0 ? 'Now' : this.props.getWeekDay(item.dt, { hour: 'numeric' })}
                                    degree={Math.round(item.main.temp)} />
                            })}
                            <div className={classes.clear}></div>
                        </div>
                        <div  className={classes.weekDayWrapper}>
                        { listDaysDegree.map((item, index) => {
                                return <WeekDayWeather key={index} weekDay={this.props.getWeekDay(item.dt, { weekday: 'long' })}
                                weatherImage={snowFlake}
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
                                 headingLeft="SUNRISE"
                                 valueLeft={new Date (this.props.state.city.sunrise * 1000).toLocaleString('ru', { hour: 'numeric', minute: "numeric" })}
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
                                 valueLeft={`${this.props.state.list[0].visibility / 100} km`}
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
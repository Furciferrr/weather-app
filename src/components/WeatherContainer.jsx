import React from 'react'
import axios from 'axios'
import Weather from './weather'
import cloud from './../img/cloud.svg'
import sunCloud from './../img/sunCloud.svg'
import scatteredClouds from './../img/scatteredClouds.svg'
import sun from './../img/sun.svg'
import lightSnow from './../img/lightSnow.svg'
import overcastClouds from './../img/overcastClouds.svg'
import volcano from './../img/volcano.svg'
import moon from './../img/moon.svg'
import moonCloudy from './../img/moonCloudy.svg'


class WeatherContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ dt: (new Date() / 1000) }],
            fetching: true
        }

    }

    getWeather = () => {
        this.setState({ fetching: true })
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${625144}&appid=ac35f82e34c8ef86117fc6e8551c2fc0&lang=${'en'}&units=${'metric'}`)
            .then(response => {
                this.setState(response.data, () => {
                    this.setState({ fetching: false })

                })
                console.log(this.state)
            })        
    }

    getWeekDay = (time, resultsObj) => {
        return (
            new Date(time * 1000 - 10800000).toLocaleString('en', resultsObj)
        )
    }

    
    weatherImageData = {
        '01d': sun,
        '01n': moon,
        '02d': sunCloud,
        '02n': moonCloudy,
        '03d': scatteredClouds,
        '03n': scatteredClouds,
        '04d': cloud,
        '04n': overcastClouds,
        '13n': lightSnow, 
        default: volcano
    }    


    componentDidMount() {
        this.getWeather()
    }
    render() {
    
        return (
            <div>
                {this.state.fetching ? 'waiting...' :
                   <Weather state={this.state}
                            getWeekDay={this.getWeekDay}
                            weatherImageData={this.weatherImageData} />
                }
            </div>
        )
    }
}



export default WeatherContainer
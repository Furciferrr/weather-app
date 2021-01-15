import React from 'react'
import axios from 'axios'
import Weather from './weather'

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
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${625144}&appid=ac35f82e34c8ef86117fc6e8551c2fc0&lang=${'ru'}&units=${'metric'}`)
            .then(response => {
                this.setState(response.data, () => {
                    this.setState({ fetching: false })

                })
                console.log(this.state)
            })        
    }

    getWeekDay = (time, resultsObj) => {
        return (
            new Date(time * 1000 - 10800000).toLocaleString('ru', resultsObj)
        )
    }
    componentDidMount() {
        this.getWeather()
    }
    render() {
    
        return (
            <div>
                {this.state.fetching ? 'waiting...' :
                   <Weather state={this.state}
                            getWeekDay={this.getWeekDay}/>
                }
            </div>
        )
    }
}



export default WeatherContainer
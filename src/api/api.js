import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ac35f82e34c8ef86117fc6e8551c2fc0',

})



export const usersAPI = {
    
    getWeather() {
        return instance.get()
            .then(response => {
                return response;
            })
    }
}
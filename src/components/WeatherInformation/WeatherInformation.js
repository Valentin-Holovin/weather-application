import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import './WeatherInformation.css'
import * as weatherActions from '../../redux/actions/weatherActions'

const WeatherInformation = (props) => {
     return(
        <div className='forecast_container'>
            <div className="forecast">
                <div className="forecast_item">
                    <div className="forecast_day">{moment().add(props.index, 'days').format('D MMM')}</div>
                    <div className='forecast_icon'><img src={props.imageUrl} alt={props.dayInfo.weather[0].icon}/></div>
                    <div className='forecas_description'>{props.dayInfo.weather[0].description}</div>
                    <div className="forecast_temp">Temp Day: {props.dayInfo.temp.day}</div>
                    <div className="forecast_temp">Temp Night: {props.dayInfo.temp.night}</div>
                </div>
            </div>
        </div>
     )
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather,
})

const mapDispatchToProps = {
    setCity: weatherActions.setCity,
    fetchWeather: weatherActions.fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInformation)

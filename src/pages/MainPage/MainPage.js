import React, {useState} from 'react'
import './MainPage.css'
import { connect } from 'react-redux'
import * as weatherActions from '../../redux/actions/weatherActions'
import Loading from '../../components/UI/Loading'
import SearchStrip from '../../components/SearchStrip/SearchStrip'
import FavoritesCities from '../../components/FavoritesCities/FavoritesCities'
import WeatherInformation from '../../components/WeatherInformation/WeatherInformation'
import TitleText from '../../components/TitleText/TitleText'

const MainPage = (props) => {

    const [PostsLoading, setPostsLoading] = useState(false)

    const getWeather = () => {
        if(!!props.weather) {
            return props.weather.list.map((dayInfo, index) => {
                const imageUrl = `http://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`
                return(
                    <WeatherInformation imageUrl={imageUrl} dayInfo={dayInfo} index={index}/>
                )
            })
        }
    }

    return (
        <div>
          <div><TitleText/></div>
          <div className='container'>
            <SearchStrip setPostsLoading={setPostsLoading}/>
            <FavoritesCities setPostsLoading={setPostsLoading}/>
          </div>
          {PostsLoading
            ? <Loading />
            :<div>
                {!!props.weather && (
                  <span className='city_name'>{props.weather.city?.name}</span>
                )}
                  <div className='weather_information'>{getWeather()}</div>
            </div>
          }
          
       </div> 
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather,
    city: state.weather.city,
  })

const mapDispatchToProps = {
    setCity: weatherActions.setCity,
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

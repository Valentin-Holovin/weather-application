import React from 'react'
import { connect } from 'react-redux'
import './SearchStrip.css'
import * as weatherActions from '../../redux/actions/weatherActions'
import * as favoritesActions from '../../redux/actions/favoritesActions'

const SearchStrip = (props) => {

    return (
        <div className='search_strip'>
            <div className='search_block'>
                <input 
                    placeholder='Enter city ...'
                    type="text" 
                    value={props.city}
                    onChange={(event) => {
                        props.setCity(event.target.value)
                    }}
                />
                
                    <button  
                        onClick={() => {
                            props.setPostsLoading(true)
                            setTimeout(() =>{
                                props.fetchWeather(() => {
                                    props.setPostsLoading(false)
                                })
                                
                            }, 1000)
                        }}
                    >Search
                    </button>

                    <button
                        onClick={() =>{
                        props.addCityToFavorites()
                    }}
                        >Favorites    
                    </button> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    city: state.weather.city,
    favorites: state.favorites.favorites
})

const mapDispatchToProps = {
    setFavorites: favoritesActions.setFavorites,
    fetchWeather: weatherActions.fetchWeather,
    setCity: weatherActions.setCity,
    addCityToFavorites: favoritesActions.addCityToFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchStrip)

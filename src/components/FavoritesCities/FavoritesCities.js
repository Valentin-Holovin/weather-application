import React from 'react'
import './FavoritesCities.css'
import { connect } from 'react-redux'
import * as weatherActions from '../../redux/actions/weatherActions'
import * as favoritesActions from '../../redux/actions/favoritesActions'

const FavoritesCities = (props) => {
    return (
        <div className='favorites_container'>
            <span className='favorite_cities'>Favorites Cities:</span>
            {props.favorites.map(city =>{
                return(
                    <div className='favorites_block'>
                        <div className='favorites_city' 
                            onClick={() => {
                            props.setPostsLoading(true)
                            setTimeout(() =>{
                                props.setCity(city)
                                props.fetchWeather(() => {
                                    props.setPostsLoading(false)
                                })
                                
                            }, 1000)
                            }}
                            >{city}
                        </div>
                        <div>
                        <button 
                            className='favorites_button'
                            onClick={() =>{
                            props.removeFavorites(city)
                        }}>
                            Delete
                        </button>
                        </div>
                        
                    </div>
                    )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    favorites: state.favorites.favorites
})

const mapDispatchToProps = {
    removeFavorites: favoritesActions.removeFavorites,
    fetchWeather: weatherActions.fetchWeather,
    setCity: weatherActions.setCity
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesCities)

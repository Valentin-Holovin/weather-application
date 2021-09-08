import * as favoritesActionTypes from '../actionType/favoritesActionType'

export const setFavorites = (favorites) => ({
    type: favoritesActionTypes.SET_FAVORITES,
    payload: favorites
});

export const removeFavorites = (remove) => ({
    type: favoritesActionTypes.REMOVE_FAVORITES,
    payload: remove
});

export const addCityToFavorites = () => async (dispatch, getState) => {   
    try {
        const city = getState().weather.city;
        const favotiteCities = getState().favorites.favorites
        console.log(getState().favorites)
        if(favotiteCities.includes(city.trim())){
            console.log("ERROR =>")
            return
        }
            dispatch(setFavorites(city.trim()))
        
       
    }catch(error){
        console.log("addCityToFavorites", error)
    }
}
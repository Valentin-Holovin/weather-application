import * as favoritesActionType from '../actionType/favoritesActionType'

const initialState = {
    favorites: [],
}

const favoritesReducer = (state = initialState, action ) => {
    switch(action.type){
        case favoritesActionType.SET_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case favoritesActionType.REMOVE_FAVORITES:
            return{
                ...state,
                favorites: state.favorites.filter(city => city != action.payload)
            }
        
        default:
            return state;
    }
}

export default favoritesReducer
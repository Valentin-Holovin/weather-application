import * as weatherActionTypes from '../actionType/weatherActionType'

const initialState = {
    weather: null,
    city: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case weatherActionTypes.SET_WEATHER:
            return{
                ...state,
                weather: action.payload
            }
        case weatherActionTypes.SET_CITY: 
            return {
                ...state,
                city: action.payload
            }
        default: 
            return state;
    }
}

export default reducer
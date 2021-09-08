import * as weatherActionTypes from '../actionType/weatherActionType'

export const setWeather = (weather) => ({
    type: weatherActionTypes.SET_WEATHER,
    payload: weather
});

export const setCity = (city) => ({
    type: weatherActionTypes.SET_CITY,
    payload: city
});

export const setError = (error) => ({
    type: weatherActionTypes.SET_ERROR,
    payload: error
});

export const fetchWeather = (callback) => async (dispatch, getState) => {   
    try {
        const city = getState().weather.city;
        const answer = await fetch (`http://api.openweathermap.org/data/2.5/forecast/daily?appid=a7566f90e4ed0120ac27665a49f3bc9a&q=${city}&units=metric`)
        const weather = await answer.json();
        if(weather.cod == 200){
            dispatch(setWeather(weather))
        }else{
            dispatch(setError(weather.message))
        }
        callback()
        
    }catch(error){}
}
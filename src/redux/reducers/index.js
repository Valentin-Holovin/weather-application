import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import weatherReducer from './reducer';
import favoritesReducer from "./favoritesReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['favorites'],
}

const rootReducer = combineReducers({
    weather: weatherReducer,
    favorites: favoritesReducer
})

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer
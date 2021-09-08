import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
export const persistor = persistStore(store);
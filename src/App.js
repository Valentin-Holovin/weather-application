import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from './redux/store'
import MainPage from './pages/MainPage/MainPage';


const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div className='App'>
          <MainPage/>
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;

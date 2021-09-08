import React from 'react'
import './TitleText.css'
import {TiWeatherPartlySunny} from 'react-icons/ti'

const TitleText = () => {
    return (
        <div className='header'>
            <div className='heading'>
                <div><TiWeatherPartlySunny/></div>
                <div>Weather Application</div> 
            </div>
        </div>
    )
}

export default TitleText


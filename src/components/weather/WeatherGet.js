import React from 'react'

function WeatherGet({ weather: { weatherInfo: { name, sys, weather, main } } }) {

    return (
        <div>
            <div className='location-box'>
                <div className='location'>
                    {name && <h2>{name} ({sys.country})</h2>}
                </div>
                <div className='date'>
                </div>
            </div>
            <div className='weather-box'>
                <div className='temp'>
                    {main && <p><span>The actual temperature in {name} is {(main.temp - 273.15).toFixed(2)}<strong>°C </strong>
 but is feels like {(main.feels_like - 273.15).toFixed(2)}<strong>°C</strong></span></p>}
                    {main && <p>Humidity ---{main.humidity}</p>}
                    {main && <p>Pressure ---{main.pressure}</p>}
                    {weather && <h2>{weather[0].description}</h2>}

                </div>
                <div className='weather'></div>
            </div>
        </div>
    )
}

export default WeatherGet

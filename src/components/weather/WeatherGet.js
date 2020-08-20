import React from 'react'

function WeatherGet(props) {
    console.log(props);

    const { name, main } = props.weather;
    return (
        <div>
            <div className='location-box'>
                <div className='location'>
                   {props.weather &&  <h2>{name} ({props.weather.sys.country})</h2>}
                </div>
                <div className='date'>
                </div>
            </div>
            <div className='weather-box'>
                <div className='temp'>
                    {props.weather && <p><span>The actual temperature in {name} is {(main.temp - 273.15).toFixed(2)}<strong>°C </strong>
 but is feels like {(main.feels_like - 273.15).toFixed(2)}<strong>°C</strong></span></p>}
                    {props.weather && <p>Humidity ---{main.humidity}</p>}
                    {props.weather && <p>Pressure ---{main.pressure}</p>}
                    {props.weather && <h2>{props.weather.weather[0].description}</h2>}

                </div>
                <div className='weather'></div>
            </div>
        </div>
    )
}

export default WeatherGet

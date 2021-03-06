import React, { useState, useEffect } from 'react';
import WeatherGet from './WeatherGet';
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather'

const WeatherSearch = ({ name, weather,loading, getWeather }) => {

    const [city, setCity] = useState(name);

    useEffect(() => {
        document.title = 'Weather | Search'
        getWeather(city);
    },[getWeather])


    const handleInput = (event) => {
        setCity(event.target.value)
    }

    const onType = (event) => {
        if (event.key === "Enter") {
            getWeather(city);
        }
    }

    return (
        <div className='weather-app'>
            <h2>Get Weather for your City</h2>
            <input autoFocus id="input-area" type='text' onKeyPress={onType} onChange={handleInput} placeholder='Search weather for your location' value={city} />
            <button id="button-ele" onClick={() => getWeather(city)}>Search</button>

            {loading && <h4>Loading...</h4>}

            <WeatherGet weather={weather} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        name: state.weather.name,
        loading: state.weather.loading
    }
}
export default connect(mapStateToProps, { getWeather })(WeatherSearch)

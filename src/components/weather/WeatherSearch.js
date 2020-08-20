import React, { Component } from 'react';
import axios from 'axios';
import WeatherGet from './WeatherGet';


const apiKey = 'e84fe97ab68c371f1d4e97d3aeaf3e9c';
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

export class WeatherSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: 'Mumbai',
            weather: ''
        }
    }

    async getCurrentWeather() {
        try {
            const response = await axios.get(`${URL}${ this.state.location }&appid=${apiKey}`);
            await this.setState({ weather: response.data });
        } catch (err) {
            alert('Not found for this city');
            console.log(err);
        }
    }

    handleInput = (event) => {
        this.setState({
            location: event.target.value
        });
    }

    onType = (event) => {
        if (event.key === "Enter") {
            this.getCurrentWeather();
        }
    }

    componentDidMount() {
        this.getCurrentWeather();
    }


    render() {
        
        return (
            <div className='weather-app'>
                <input  id="input-area" type='text' onKeyPress={this.onType} onChange={this.handleInput} placeholder='Search weather for your location'value={this.state.location} />
                {/* <button id="button-ele" onClick={this.getCurrentWeather}>Search</button> */}

                <WeatherGet weather={this.state.weather} />
            </div>
        )

    }
}

export default WeatherSearch

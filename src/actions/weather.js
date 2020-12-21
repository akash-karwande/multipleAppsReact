import axios from 'axios';

const apiKey = 'e84fe97ab68c371f1d4e97d3aeaf3e9c';
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

export const getWeather = (city) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}${city}&appid=${apiKey}`);

        dispatch({
            type: 'GET_WEATHER',
            name: city,
            payload: data
        });

    } catch (err) {
        alert(`Not available for this city. Please modify your input`)
        dispatch({
            type: 'WEATHER_ERROR',
            payload: err.message
        });

    }
}
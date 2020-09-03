const initialState = {
    weatherInfo: {},
    loading: true,
    error: ''
}


export const weatherReducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'GET_WEATHER':
            return {
                ...state,
                weatherInfo: payload,
                loading: false
            }

        case 'WEATHER_ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            }

        default: return state
    }
}
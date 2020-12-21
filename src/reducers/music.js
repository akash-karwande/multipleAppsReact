const initialState = {
    name: 'Jonita Gandhi',
    artist: {},
    songs: [],
    loading: true
}


export const musicReducer = (state = initialState, action ) => {
    const { type, payload} = action;
    switch(type) {
        case 'GET_SINGER':
            return {
                ...state,
                artist: payload,
                name: action.name,
                loading: true
            }

        case 'GET_SONGS':
            return {
                ...state,
                songs: payload,
                loading: false
            }

        case 'MUSIC_ERROR':
            return {
                ...state,
                artist: [],
                songs: [],
                loading: false
            }

        default: return state
    }
}
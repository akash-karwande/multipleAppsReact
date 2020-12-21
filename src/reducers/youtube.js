const initialState = {
    videos: [],
    videoSearch: '#',
    loading: true,
    error: ''
}


export const youtubeReducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'GET_VIDEOS':
            return {
                ...state,
                videoSearch: action.videoSearch,
                videos: payload,
                loading: false
            }

        case 'VIDEOS_ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            }

        default: return state
    }
}
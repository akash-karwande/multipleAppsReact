
const initialState = {
    imagesArray: [],
    loading: true,
    error: ''
};

export const imageReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_IMAGES':
            return {
                ...state,
                imagesArray: payload,
                loading: false
            }

        case 'ERROR':
            return {
                ...state,
                imagesArray: [],
                loading: false
            }

        default: return state
    }

}
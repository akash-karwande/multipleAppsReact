
const initialState = {
    imagesArray: [],
    name: '',
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
                name: action.name,
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
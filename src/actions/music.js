import axios from 'axios';


export const getMusic = (name) => async (dispatch) => {

    try {
        const {data: {artists: {items}}} = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${name}`);
        await dispatch({
            type: 'GET_SINGER',
            name: name,
            payload: items[0]
        })

        const artistID = items[0].id;

        const {data: {tracks}} = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artistID}/top-tracks`);

        await dispatch({
            type: 'GET_SONGS',
            payload: tracks
        })

    } catch (err) {
        dispatch({
            type: 'MUSIC_ERROR',
            payload: err.message
        })
        
    }
}
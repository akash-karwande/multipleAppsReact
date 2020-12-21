import axios from 'axios';

export const getVideos = (searchTerm) => async (dispatch) => {
    // AIzaSyDvKtijJNw-7ofvbVaD85uFKrCfd0eGRPk
    // AIzaSyAIEb37CjocHo6oevXE-KWf6lcJdFDvVqI
    try {
        const { data: { items: videos } } = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: 'AIzaSyDvKtijJNw-7ofvbVaD85uFKrCfd0eGRPk',
                q: searchTerm,
            }
        });
        dispatch({
            type: 'GET_VIDEOS',
            videoSearch: searchTerm,
            payload: videos
        });

        // setVideos(videos);
        // setSelectedVideo(videos[0]);
    } catch (err) {

        if (err.response.status === 403) {
            alert('Ohh...Looks like we have reach the daily API hit limit. Please try tomorrow')
        }
        console.log(err)

        dispatch({
            type: 'VIDEOS_ERROR',
            payload: err.message
        });

    }
}
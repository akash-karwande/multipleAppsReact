import axios from 'axios';


export const getImages = (name) => async (dispatch) => {
   try {
    const {data: { hits}} = await axios.get(`https://pixabay.com/api/?key=17887762-8330a722609c46ae7614cb767&q=${name}&per_page=24`);
    dispatch({
        type: 'GET_IMAGES',
        payload: hits
    });
   } catch (err) {

      dispatch({
          type: 'ERROR',
          payload: err.message
      });
       
   }
}
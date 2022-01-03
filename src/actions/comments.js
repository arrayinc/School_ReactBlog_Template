import { addComments } from '../state/commentSlice';
import * as api from '../api/index.js';

export const getComments = () => async (dispatch) => {
  console.log("here")
  try {
    
    const { data } = await api.fetchComments();

    dispatch(addComments(data));
  } catch (error) {
    console.log(error);
  }
};

export const createComments = (post) => async (dispatch) => {
    console.log(post)
  try {
    const { data } = await api.addComment(post);
    console.log(data)
    dispatch(addComments(data));
  } catch (error) {
    console.log(error);
  }
};


import { GET_ERRORS, GET_USER } from './types';
import axios from 'axios';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(
      res => history.push('/login')
      // dispatch({
      //   type: GET_USER,
      //   payload: res.data
      // })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

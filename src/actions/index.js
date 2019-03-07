import axios from 'axios';

export const FETCH_SWAPI_START = 'FETCH_SWAPI_START';
export const FETCH_SWAPI_SUCCESS = 'FETCH_SWAPI_SUCCESS';
export const FETCH_SWAPI_FAILURE = 'FETCH_SWAPI_FAILURE';

export const fetchSwapi = () => dispatch => {
  dispatch({ type: FETCH_SWAPI_START });
  axios
    .get('https://swapi.co/api/people/')
    .then(({ data }) =>
      dispatch({ type: FETCH_SWAPI_SUCCESS, payload: data.results })
    )
    .catch(err =>
      dispatch({ type: FETCH_SWAPI_FAILURE, payload: err.response })
    );
};

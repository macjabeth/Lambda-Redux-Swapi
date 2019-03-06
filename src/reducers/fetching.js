import {
  FETCH_SWAPI_START,
  FETCH_SWAPI_SUCCESS,
  FETCH_SWAPI_FAILURE
} from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_SWAPI_START:
      return true;
    case FETCH_SWAPI_SUCCESS:
    case FETCH_SWAPI_FAILURE:
      return false;
    default:
      return state;
  }
};

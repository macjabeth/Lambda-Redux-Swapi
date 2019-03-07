import { FETCH_SWAPI_FAILURE } from '../actions';

export default (state, action) =>
  action.type === FETCH_SWAPI_FAILURE ? action.payload : '';

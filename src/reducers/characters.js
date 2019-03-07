import { FETCH_SWAPI_SUCCESS } from '../actions';

export default (state = [], action) =>
  action.type === FETCH_SWAPI_SUCCESS ? action.payload : state;

import { combineReducers } from 'redux';

import characters from './characters';
import fetching from './fetching';
import error from './error';

export default combineReducers({
  characters,
  fetching,
  error
});

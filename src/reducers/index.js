import { combineReducers } from 'redux';
import data from './dataReducer';
import modal from './modalReducer'

export default combineReducers({
  data,
  modal
});
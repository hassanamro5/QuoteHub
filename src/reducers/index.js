import {combineReducers} from 'redux';
import data from './dataReducer';
import view from './viewReducer';

export default combineReducers({
  data,
  view
});
import { createStore, combineReducers } from 'redux';
import modal from './ducks/modal';

const reducer = combineReducers({
	modal
});
const store = (window.devToolsExtension
	? window.devToolsExtension()(createStore)
	: createStore)(reducer);

export default store;

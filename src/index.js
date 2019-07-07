import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './components/App';
import ModalContainer from './containers/ModalContainer';
import store from './store';

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			<ModalContainer />
		</div>
	</Provider>,
	rootEl
);

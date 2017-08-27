import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './reducers'

const Store =createStore(allReducers, {},
	compose(
			applyMiddleware(thunk, logger),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default Store;
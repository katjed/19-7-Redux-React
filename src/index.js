import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { addComment } from './actions';
// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

/*
const logger = createLogger();
const store = createStore(
  	reducer,
  	applyMiddleware(logger)
);
*/
const store = createStore(
  	reducer,
  	DevTools.instrument()
);

ReactDOM.render(
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('root')
);

store.dispatch(addComment('First comment'));
store.dispatch(addComment('Second comment'));
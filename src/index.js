import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';

import App from './App';
import rootSaga from './redux/sagas';

// Initialize to an empty object
const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

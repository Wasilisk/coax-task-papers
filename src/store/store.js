import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


export default store;
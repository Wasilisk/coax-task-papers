import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import taskReducer from './reducers/taskReducer.js';

const persistConfig = {
    key: 'tasks',
    storage,
}

const persistedReducer = persistReducer(persistConfig, taskReducer)
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store)


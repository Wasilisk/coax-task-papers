import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import App from './App';
import {persistor, store} from "./store/store";
import CompleteIcon from "./assets/icons/CompleteIcon";


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<CompleteIcon/>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

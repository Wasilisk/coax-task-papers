import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TaskProvider} from "./contexts/taskContext";

ReactDOM.render(
    <TaskProvider>
        <App />
    </TaskProvider>,
  document.getElementById('root')
);

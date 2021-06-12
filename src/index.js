import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TripView from './views/TripView.js';

ReactDOM.render(
    <React.StrictMode>
        <TripView />
    </React.StrictMode>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StopwatchComponent from './components/stopwatch/stopwatch.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StopwatchComponent/>
  </React.StrictMode>
);

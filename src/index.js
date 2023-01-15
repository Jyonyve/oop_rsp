import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './component/user';
import { computer } from './component/computer';
import { choice } from './aggregation/choice';

ReactDOM.render(
  <React.StrictMode>
    <App choice = {choice} user = {User} computer = {computer} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

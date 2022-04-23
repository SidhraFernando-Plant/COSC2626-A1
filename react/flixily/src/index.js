import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';

const configuration = {
  secretAccessKey: 'dZihY08Tfio+KkBWZONA43E/SzanFjhlpvaVoHDI',
  accessKeyId: 'ASIAXXV5V5ND6XLDNCWND',
  region: 'us-east-1',
};

AWS.config.update(configuration);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

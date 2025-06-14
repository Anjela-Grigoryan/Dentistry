import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import State from './State/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state = {State}/>
  </React.StrictMode>
);

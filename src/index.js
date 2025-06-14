import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import State from './State/State';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App state = {State}/>
    </BrowserRouter>
  </React.StrictMode>
);

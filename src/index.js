import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// react router
import { BrowserRouter} from "react-router-dom";
//global states
import DataState from './context/store/DataState.jsx'
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <DataState>
      <App/>
    </DataState>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

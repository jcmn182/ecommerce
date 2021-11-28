import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// react router
import { BrowserRouter} from "react-router-dom";
//global states
import SearchState from './context/search/SearchState.jsx'
import DataState from './context/store/DataState.jsx'
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <SearchState>
    <DataState>
      <App/>
    </DataState>
    </SearchState>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.hydrate(
  <Router>
    <App {...initialState} />
  </Router>,
  document.getElementById('root'));
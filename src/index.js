import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/Login'
import Register from './Register/Register'



ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);


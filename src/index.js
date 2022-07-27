import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'
ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root'),
)

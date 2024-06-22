import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./style/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import employesReducer from "./toolkit/Slicer.jsx"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:{
    employes:employesReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

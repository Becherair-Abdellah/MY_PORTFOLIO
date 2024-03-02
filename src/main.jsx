import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={Router}/>
  </Provider>

)

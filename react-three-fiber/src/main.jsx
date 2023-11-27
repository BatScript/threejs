import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookContainer from './page-containers/book'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'test',
    element: <BookContainer />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import Auth from './context/Auth.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth>
    <RouterProvider router={router} />
  </Auth>
);

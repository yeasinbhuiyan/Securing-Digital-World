import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Settings from './Components/Settings/Settings';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Privacy from './Components/Settings/Privacy/Privacy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

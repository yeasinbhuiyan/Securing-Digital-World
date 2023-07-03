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
import ChangePassword from './Components/Settings/Security/ChangePassword/ChangePassword';
import UpdatePicture from './Components/UpdateProfile/GeneralDetails/UpdatePicture';
import Edite from './Components/UpdateProfile/GeneralDetails/Edite';


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
      },
      {
        path: '/change-password',
        element: <ChangePassword></ChangePassword>
      },
      {
        path: '/update',
        element: <UpdatePicture></UpdatePicture>
      },
      {
        path: '/edite',
        element: <Edite></Edite>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

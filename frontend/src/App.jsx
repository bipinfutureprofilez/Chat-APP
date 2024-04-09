import React from 'react'
import HomeLayout from './pages/HomeLayout';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Landing,
  Login,
  Register,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />     
    </>
  )
}

export default App

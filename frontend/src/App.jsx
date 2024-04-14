import React from 'react'
import HomeLayout from './pages/HomeLayout';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast'

import {
  Landing,
  Login,
  Register,
} from './pages';
import { useAuthContext } from './context/AuthContext';
 

function App() {
  const { authUser } = useAuthContext();
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: authUser ? <Landing /> : <Navigate to='/login' />,
        },
        {
          path: 'login',
          element: authUser ? <Navigate to='/' /> : <Login />,
        },
        {
          path: 'register',
          element: authUser ? <Navigate to='/' /> : <Register />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} /> 
      <Toaster />
    </>
  )
}

export default App

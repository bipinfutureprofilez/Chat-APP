import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className='page-wrapper'>
        <Outlet />
        
    </div>
  )
}

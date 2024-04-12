import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogoutHook from '../hooks/LogoutHook';

export default function Logout() {
  const { logout } = useLogoutHook();

  const LogoutHandler = async () => {
    await logout();
  }

  return (
    <div className="logout-box">
      <button type='button' onClick={LogoutHandler}><BiLogOut /> </button>
    </div>
  );
}

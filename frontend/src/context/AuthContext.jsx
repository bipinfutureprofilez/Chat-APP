import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem('chat-user') || null);
    // const [authUser, setAuthUser] = useState('bipin');
    return <AuthContext.Provider value={{ authUser, setAuthUser }} >{children}</AuthContext.Provider>;
}

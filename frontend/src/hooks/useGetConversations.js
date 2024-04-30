import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/UseConversation";

const useGetConversations = () => {
  const { conversationsUser, setConversationsUser } = useConversation();

    const { authUser } = useAuthContext();
    // console.log(loggedUser.token); 
  const getConversations = async (name = '') => {
    try {
      
      var loggedUser;
      if (authUser instanceof Object) {
        loggedUser = authUser;
      } else {
        loggedUser = JSON.parse(authUser);
      }
      var path = '';
      if (!name || name == '') {
        path = `/api/users`;
      } else {
        path = `/api/users?name=${name}`;
      }
      // console.log(path);
      const response = await axios.get(
        path,
        {
          headers: {
            Authorization: `Bearer ${loggedUser.token}`,
          },
        }
      );
      setConversationsUser(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }
    
    useEffect(() => {
        getConversations();
    }, []);

  return { conversationsUser, getConversations };
}

export default useGetConversations;
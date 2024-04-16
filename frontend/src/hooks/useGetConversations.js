import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
    const [conversations, setConversations ] = useState([]);

    const { authUser } = useAuthContext();
    // console.log(loggedUser.token); 
  const getConversations = async () => {
    try {
      const loggedUser = JSON.parse(authUser);
      const response = await axios.get(
        "http://localhost:5000/api/users",
        {
          headers: {
            Authorization: `Bearer ${loggedUser.token}`,
          },
        }
      );
      setConversations(response.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
    
    useEffect(() => {
        getConversations();
    }, []);

    return { conversations };
}

export default useGetConversations;
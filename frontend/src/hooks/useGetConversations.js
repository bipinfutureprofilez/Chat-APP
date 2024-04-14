import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
    const [conversations, setConversations ] = useState([]);

    const { authUser } = useAuthContext();
    // console.log(loggedUser.token); 
    
    
    useEffect(() => {
        const loggedUser = JSON.parse(authUser);
        const getConversations = async () => {
            try {
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
        getConversations()
    }, []);

    return { conversations };
}

export default useGetConversations;
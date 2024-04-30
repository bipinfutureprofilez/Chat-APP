
import { useEffect } from "react";
import useConversation from "../zustand/UseConversation";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const getMessageHook = () => {
    
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext();

    const fatchMessages = async () => {
        try {
            var loggedIn;
            if (authUser instanceof Object) {
                loggedIn = authUser;
            } else {
                loggedIn = JSON.parse(authUser);                
            }
            const response = await axios.get(`/api/message/${selectedConversation._id}`, {
                headers: {
                    Authorization: `Bearer ${loggedIn.token}`,
                },
            });
            
            setMessages(response.data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (selectedConversation?._id) fatchMessages();
    }, [selectedConversation?._id, setMessages])

    return { messages }

}


export default getMessageHook;
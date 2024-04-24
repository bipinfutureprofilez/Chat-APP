import toast from "react-hot-toast";
import useConversation from "../zustand/UseConversation";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const sendMessageHook = () => {
    
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext();

    const sendMessage = async (message) => {
        try {
            // const loggedIn = JSON.parse(authUser);
            var loggedIn;
            if (authUser instanceof Object) {
                loggedIn = authUser;
            } else {
                loggedIn = JSON.parse(authUser);
            }
            const response = await axios.post(`http://localhost:5000/api/message/send/${selectedConversation?._id}`, { message }, {
                headers: {
                    Authorization: `Bearer ${loggedIn.token}`,
                },
            })
            setMessages([...messages, response.data])
        } catch (error) {
            toast.error(error.message)
        }
    }

    return { sendMessage }
}

export default sendMessageHook;
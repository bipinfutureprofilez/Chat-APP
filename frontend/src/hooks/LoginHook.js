import axios from 'axios';
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';
import { useState } from 'react';

const useLoginHook = () => {
    const { setAuthUser } = useAuthContext();
    const [processing, setProcessing] = useState(false)

    const signIn = async ({email, password}) => {
        const success = errorHandler({ email, password })
        if (!success) return;
        setProcessing(true)
        try {
            const response = await axios.post(
              "http://localhost:5000/api/auth/login",
              { email, password }
            );
            localStorage.setItem('chat-user', JSON.stringify(response.data));
            setAuthUser(response.data)
            setProcessing(false);
            toast.success('Login Successfully');
        } catch (error) {
            toast.error(error.message)
            setProcessing(false);
        }
    }
    return { signIn, processing };
}

export default useLoginHook;

function errorHandler({ email, password }){
    if (!email || !password) {
        toast.error('Please fill the all fields!')
        return false;
    }
    return true;
}
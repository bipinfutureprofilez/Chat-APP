import axios from 'axios';
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';

const useLoginHook = () => {
    const { setAuthUser } = useAuthContext();

    const signIn = async ({email, password}) => {
        const success = errorHandler({ email, password })
        if (!success) return;
        try {
            const response = await axios.post('/api/auth/login', { email, password })
            localStorage.setItem('chat-user', JSON.stringify(response.data));
            setAuthUser(response.data)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return {signIn}
}

export default useLoginHook;

function errorHandler({ email, password }){
    if (!email || !password) {
        toast.error('Please fill the all fields!')
        return false;
    }
    return true;
}
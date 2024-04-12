import axios from 'axios';
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';

const useLogoutHook = () => {

    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            const response = await axios.post('/api/auth/logout');
            localStorage.removeItem('chat-user')
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return { logout }
}

export default useLogoutHook;
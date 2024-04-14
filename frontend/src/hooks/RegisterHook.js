import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';


const RegisterHook = () => {
    const { setAuthUser } = useAuthContext();
    const [processing, setProcessing] = useState(false)

    const signUp = async ({ name, email, gender, password, confirmPassword }) => {
        const success = errorHandler({ name, email, gender, password, confirmPassword });
        if (!success) return;
        setProcessing(true)
        try {
            const response = await axios.post(
              "http://localhost:5000/api/auth/register",
              { name, email, gender, password, confirmPassword }
            );
            
            console.log(response.data);
            localStorage.setItem('chat-user', JSON.stringify(response.data));
            setAuthUser(response.data)
            setProcessing(false)
            toast.success('Account has beed created!')
        } catch (error) {
            toast.error(error.response.data.msg)
            setProcessing(false)
        }
    }

    return { signUp, processing }
    
}

export default RegisterHook;


function errorHandler({ name, email, gender, password, confirmPassword }) {
    if (!name || !email || !gender || !password || !confirmPassword) {
        toast.error("Please fill the all fields!");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Password didn't match!");
        return false;
    }
    return true;
}
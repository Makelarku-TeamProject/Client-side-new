import axios from 'axios';
import { hostTarget } from '../helpers/config';

const register = async (username, email, password, role) => {
    try {
        const response = await axios.post(`${hostTarget}/auth/register`, {
            username, password, email, role
        })
        return response.data
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
}

const login = async (email, password) => {
    try {
        const response = await axios.post(`${hostTarget}/auth/login`, {
            email, password
        })
        return response.data
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
}

const userService = {
    register, login
}

export default userService

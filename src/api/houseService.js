import axios from 'axios';
import { config, hostTarget } from '../helpers/config';

const getAllHouses = async (token) => {
    try {
        const response = await axios.get(`${hostTarget}/house`, config(token));
        return response.data; 
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const createHouse = async (token, houseData) => {
    try {
        const response = await axios.post(`${hostTarget}/house`, houseData, config(token));
        return response.data; 
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const deleteHouse = async (token, id) => {
    try {
        const response = await axios.delete(`${hostTarget}/house/${id}`, config(token));
        return response.data; 
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const houseService = {
    getAllHouses,
    createHouse,
    deleteHouse,
};

export default houseService;

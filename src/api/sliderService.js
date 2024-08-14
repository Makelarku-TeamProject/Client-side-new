import axios from 'axios';
import { config, hostTarget } from '../helpers/config';  

const getAllSliders = async (token) => {
    try {
        const response = await axios.get(`${hostTarget}/slider`, config(token));
        return response.data;  
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const getSliderById = async (token, sliderId) => {
    try {
        const response = await axios.get(`${hostTarget}/slider/${sliderId}`, config(token));
        return response.data;  
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const createSlider = async (token, sliderData) => {
    try {
        const response = await axios.post(`${hostTarget}/slider/`, sliderData, config(token, true)); 
        return response.data;
    } catch (error) {
        console.error('Failed to add slider:', error.response ? error.response.data : error.message);
        throw error;
    }
};

const deleteSlider = async (token, sliderId) => {
    try {
        const response = await axios.delete(`${hostTarget}/slider/${sliderId}`, config(token));
        return response.data;  
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const sliderService = {
    getAllSliders,
    getSliderById,
    createSlider,
    deleteSlider,
};

export default sliderService;

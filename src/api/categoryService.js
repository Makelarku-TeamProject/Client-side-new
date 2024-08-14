import axios from 'axios';
import { config ,hostTarget } from '../helpers/config';

const getCategoryData = async (token) => {
    try {
        const response = await axios.get(`${hostTarget}/categories`, config(token));
        return response;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const addCategoryData = async (token, categoryData) => {
    try {
        const response = await axios.post(`${hostTarget}/categories`, categoryData, config(token));
        return response;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const updateCategoryData = async (token, categoryId, categoryData) => {
    try {
        const response = await axios.patch(`${hostTarget}/categories/${categoryId}`, categoryData, config(token));
        return response.data; 
    } catch (error) {
        console.error('API error:', error);
        throw error; 
    }
};

const deleteCategoryData = async (token, categoryId) => {
    try {
        const response = await axios.delete(`${hostTarget}/categories/${categoryId}`, config(token));
        return response.data; 
    } catch (error) {
        console.error('API error:', error);
        throw error; 
    }
};



const categoryService = {
    getCategoryData,
    addCategoryData,
    updateCategoryData,
    deleteCategoryData,
};

export default categoryService;

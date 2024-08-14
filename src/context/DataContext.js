import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import houseService from '../api/houseService'; 
import categoryService from '../api/categoryService';
import sliderService from '../api/sliderService';
import { AuthContext } from './AuthContext';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);

    // TODO : State and handlers for houses
    const [houses, setHouses] = useState([]);
    const [houseLoading, setHouseLoading] = useState(false);
    const [houseError, setHouseError] = useState(null);

    // TODO : State and handlers for categories
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [categoryError, setCategoryError] = useState(null);

    // TODO : State and handlers for sliders
    const [sliders, setSliders] = useState([]);
    const [sliderLoading, setSliderLoading] = useState(false);
    const [sliderError, setSliderError] = useState(null);

    const fetchHouses = useCallback(async () => {
        if (auth?.token) {
            setHouseLoading(true);
            setHouseError(null);
            try {
                const response = await houseService.getAllHouses(auth.token);
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setHouses(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error('Error:', err);
                setHouseError(err.message);
            } finally {
                setHouseLoading(false);
            }
        } else {
            setHouseError('No token provided');
        }
    }, [auth?.token]);

    const fetchCategories = useCallback(async () => {
        if (auth?.token) {
            setCategoryLoading(true);
            setCategoryError(null);
            try {
                const response = await categoryService.getCategoryData(auth.token);
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setCategories(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error('Error:', err);
                setCategoryError(err.message);
            } finally {
                setCategoryLoading(false);
            }
        } else {
            setCategoryError('No token provided');
        }
    }, [auth?.token]);

    const fetchSliders = useCallback(async () => {
        if (auth?.token) {
            setSliderLoading(true);
            setSliderError(null);
            try {
                const response = await sliderService.getAllSliders(auth.token);
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setSliders(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error('Error:', err);
                setSliderError(err.message);
            } finally {
                setSliderLoading(false);
            }
        } else {
            setSliderError('No token provided');
        }
    }, [auth?.token]);

    useEffect(() => {
        fetchHouses();
        fetchCategories();
        fetchSliders();
    }, [fetchHouses, fetchCategories, fetchSliders]);

    const addHouse = async (houseData) => {
        if (auth?.token) {
            try {
                await houseService.createHouse(auth.token, houseData);
                toast.success('House added successfully!');
                fetchHouses();  
                setHouseError(null);
            } catch (err) {
                console.error('Failed to add house:', err);
                setHouseError('Failed to add house');
            }
        } else {
            setHouseError('No token provided');
        }
    };


    const deleteHouse = async (houseId) => {
        if (auth?.token) {
            try {
                await houseService.deleteHouse(auth.token, houseId);
                toast.success('House deleted successfully!');
                fetchHouses();  
                setHouseError(null);
            } catch (err) {
                console.error('Failed to delete house:', err);
                setHouseError('Failed to delete house');
            }
        } else {
            setHouseError('No token provided');
        }
    };

    const addCategory = async (categoryData) => {
        if (auth?.token) {
            try {
                await categoryService.addCategoryData(auth.token, categoryData);
                toast.success('Category added successfully!');
                fetchCategories();  
                setCategoryError(null);
            } catch (err) {
                console.error('Failed to add category:', err);
                setCategoryError('Failed to add category');
            }
        } else {
            setCategoryError('No token provided');
        }
    };

    const updateCategory = async (categoryId, categoryData) => {
        if (auth?.token) {
            try {
                await categoryService.updateCategoryData(auth.token, categoryId, categoryData);
                toast.success('Category updated successfully!');
                fetchCategories();  
                setCategoryError(null);
            } catch (err) {
                console.error('Failed to update category:', err);
                setCategoryError('Failed to update category');
            }
        } else {
            setCategoryError('No token provided');
        }
    };

    const deleteCategory = async (categoryId) => {
        if (auth?.token) {
            try {
                await categoryService.deleteCategoryData(auth.token, categoryId);
                toast.success('Category deleted successfully!');
                fetchCategories();  
                setCategoryError(null);
            } catch (err) {
                console.error('Failed to delete category:', err);
                setCategoryError('Failed to delete category');
            }
        } else {
            setCategoryError('No token provided');
        }
    };

    const addSlider = async (sliderData) => {
        if (auth?.token) {
            try {
                await sliderService.createSlider(auth.token, sliderData);
                toast.success('Slider created successfully!');
                fetchSliders();  
                setSliderError(null);
            } catch (err) {
                console.error('Failed to add slider:', err);
                setSliderError('Failed to add slider');
            }
        } else {
            setSliderError('No token provided');
        }
    };

    const deleteSlider = async (sliderId) => {
        if (auth?.token) {
            try {
                await sliderService.deleteSlider(auth.token, sliderId);
                toast.success('Slider deleted successfully!');
                fetchSliders();  
                setSliderError(null);
            } catch (err) {
                console.error('Failed to delete slider:', err);
                setSliderError('Failed to delete slider');
            }
        } else {
            setSliderError('No token provided');
        }
    };

    return (
        <DataContext.Provider
            value={{
                houses,
                houseLoading,
                houseError,
                addHouse,
                deleteHouse,
                fetchHouses,
                categories,
                categoryLoading,
                categoryError,
                addCategory,
                updateCategory,
                deleteCategory,
                fetchCategories,
                sliders,
                sliderLoading,
                sliderError,
                addSlider,
                deleteSlider,
                fetchSliders,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };

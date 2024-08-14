import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'antd'; // Import Form from antd
import Layout from '../components/Admin/LayoutComponent';
import { DataContext } from '../context/DataContext';
import HouseFormComponent from '../components/House/HouseFormComponent';
import HouseTableComponent from '../components/House/HouseTableComponent';

const HousesPage = () => {
    const { houses, houseLoading, houseError, addHouse, deleteHouse, fetchHouses, fetchCategories, categories } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [form] = Form.useForm();

    useEffect(() => {
        fetchHouses();
        fetchCategories();
    }, [fetchHouses, fetchCategories]);

    const handleSubmit = async (values) => {
        try {
            await addHouse(values);
            form.resetFields();
        } catch (err) {
            console.error('Failed to submit house:', err);
        }
    };

    const handleEdit = (house) => {
        form.setFieldsValue({ ...house });
    };

    const handleDelete = async (id) => {
        try {
            await deleteHouse(id);
        } catch (err) {
            console.error('Failed to delete house:', err);
        }
    };

    if (houseLoading) return <div className="text-center mt-5"><p>Loading...</p></div>;
    if (houseError) return <div className="text-center mt-5"><p className="text-danger">{houseError}</p></div>;

    return (
        <Layout>
            <main className="p-4 min-vh-100">
                <section className="mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                {/* Form Section */}
                                <HouseFormComponent categories={categories} form={form} onSubmit={handleSubmit} />
                            </div>
                            <div className="col-8">
                                {/* Data Table Section */}
                                <HouseTableComponent
                                    categories={categories}
                                    houses={houses}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    searchTerm={searchTerm}
                                    onSearch={setSearchTerm}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HousesPage;

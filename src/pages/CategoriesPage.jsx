import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'antd'; // Import Form from antd
import Layout from '../components/Admin/LayoutComponent';
import { DataContext } from '../context/DataContext';
import CategoryForm from '../components/Category/CategoryFormComponent';
import CategoryTable from '../components/Category/CategoryTableComponent';

const CategoriesPage = () => {
    const { categories, loading, error, addCategory, updateCategory, deleteCategory, fetchCategories } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [form] = Form.useForm(); // Initialize form

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const handleSubmit = async (values) => {
        try {
            if (values.id) {
                await updateCategory(values.id, { name: values.name });
            } else {
                await addCategory({ name: values.name });
            }
            form.resetFields();
        } catch (err) {
            console.error('Failed to submit category:', err);
        }
    };

    const handleEdit = (category) => {
        form.setFieldsValue({ id: category.id, name: category.name });
    };

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
        } catch (err) {
            console.error('Failed to delete category:', err);
        }
    };

    if (loading) return <div className="text-center mt-5"><p>Loading...</p></div>;
    if (error) return <div className="text-center mt-5"><p className="text-danger">{error}</p></div>;

    return (
        <Layout>
            <main className="p-4 min-vh-100">
                <section className="mt-4">
                    <div className="container">
                        <div className="row">
                            {/* Form Section */}
                            <CategoryForm form={form} onSubmit={handleSubmit} onEdit={handleEdit} />
                            {/* Data Table Section */}
                            <CategoryTable
                                categories={categories}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                searchTerm={searchTerm}
                                onSearch={setSearchTerm}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default CategoriesPage;

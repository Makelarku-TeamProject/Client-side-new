import React, { useContext, useState, useMemo, useEffect } from 'react';
import { Form } from 'antd';
import Layout from '../components/Admin/LayoutComponent';
import { DataContext } from '../context/DataContext';
import SliderForm from '../components/Slider/SliderFormComponent';
import SliderTable from '../components/Slider/SliderTableComponent';

const SliderPage = () => {
    const { sliders, sliderLoading, sliderError, addSlider, deleteSlider, fetchSliders } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [form] = Form.useForm();

    useEffect(() => {
        fetchSliders();
    }, [fetchSliders]);

    const filteredSliders = useMemo(() => {
        return sliders.filter(slider =>
            slider.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, sliders]);

    const handleSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);

            if (values.image) {
                formData.append('image', values.image);
            } else {
                throw new Error('Image file required');
            }

            await addSlider(formData);
            form.resetFields();
        } catch (err) {
            console.error('Failed to submit slider:', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteSlider(id);
        } catch (err) {
            console.error('Failed to delete slider:', err);
        }
    };

    if (sliderLoading) return <div className="text-center mt-5"><p>Loading...</p></div>;
    if (sliderError) return <div className="text-center mt-5"><p className="text-danger">{sliderError}</p></div>;

    return (
        <Layout>
            <main className="p-4 min-vh-100">
                <section className="mt-4">
                    <div className="container">
                        <div className="row">
                            <SliderForm form={form} onSubmit={handleSubmit} />
                            <SliderTable sliders={filteredSliders} onDelete={handleDelete} />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default SliderPage;

import React, { useState } from 'react';
import { Select, Form, Input, Button } from 'antd';

const HouseFormComponent = ({ categories, form, onSubmit }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (values) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('house_images', files[i]);
        }
        // Append other form data
        formData.append('name', values.name);
        formData.append('num_rooms', values.num_rooms);
        formData.append('sq_ft', values.sq_ft);
        formData.append('location', values.location);
        formData.append('price', values.price);
        formData.append('description', values.description);
        formData.append('categoryId', values.categoryId);
        

        try {
            await onSubmit(formData);
            form.resetFields();
            setFiles([]);
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item name="id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input the house name!' }]}>
                <Input placeholder="House Name" />
            </Form.Item>
            <Form.Item name="num_rooms" rules={[{ required: true, message: 'Please input the number of rooms!' }]}>
                <Input type="number" placeholder="Number of Rooms" />
            </Form.Item>
            <Form.Item name="sq_ft" rules={[{ required: true, message: 'Please input the square footage!' }]}>
                <Input type="number" placeholder="Square Footage" />
            </Form.Item>
            <Form.Item name="location" rules={[{ required: true, message: 'Please input the location!' }]}>
                <Input placeholder="Location" />
            </Form.Item>
            <Form.Item name="price" rules={[{ required: true, message: 'Please input the price!' }]}>
                <Input type="number" placeholder="Price" />
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
                <Input.TextArea placeholder="Description" />
            </Form.Item>
            <Form.Item name="categoryId" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select placeholder="Select Category">
                    {categories.map((category)=>(
                        <Select.Option value={category.id}>{category.name}</Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            multiple
                            onChange={handleFileChange}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose files</label>
                    </div>
                </div>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default HouseFormComponent;

import React from 'react';
import { Form, Input, Button } from 'antd';

const CategoryFormComponent = ({ form, onSubmit, onEdit }) => {
    return (
        <div className="col-md-4 mb-4">
            <h2 className="mb-4">Add / Edit Categories</h2>
            <Form form={form} onFinish={onSubmit} layout="vertical">
                <Form.Item name="id" hidden>
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the category name!' }]}
                >
                    <Input placeholder="Category Name" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-100">
                        {form.getFieldValue('id') ? 'Update Category' : 'Add Category'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CategoryFormComponent;

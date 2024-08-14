import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const SliderFormComponent = ({ form, onSubmit }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleFinish = (values) => {
        onSubmit({ ...values, image: selectedFile });
    };

    return (
        <div className="col-md-4 mb-4">
            <h2 className="mb-4">Add Slider</h2>
            <Form form={form} onFinish={handleFinish} layout="vertical">
                <Form.Item name="id" hidden>
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the slider name!' }]}
                >
                    <Input placeholder="Slider Name" />
                </Form.Item>
                <Form.Item
                    name="image"
                    rules={[{ required: true, message: 'Please upload an image!' }]}
                >
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
                                onChange={handleFileChange} 
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-100 btn btn-primary">
                        Add Slider
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SliderFormComponent;

import React, { useState } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

function AddRecipe() {
    const [loading, setLoading] = useState(false);
    const [media, setMedia] = useState([]);

    const handleUpload = ({ fileList }) => setMedia(fileList);

    const onFinish = (values) => {
        setLoading(true);
        const formData = new FormData();
        for (const key in values) {
            formData.append(key, values[key]);
        }
        media.forEach(file => {
            formData.append('media', file.originFileObj)
        });

        axios.post('http://localhost:3000/apiRecipe/recipes', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                message.success('Recipe added successfully!');
                setLoading(false);
            })
            .catch(error => {
                message.error('Failed tp add recipe!');
                setLoading(false);
            })
    }
    return (
        <Form name='add-recipe' onFinish={onFinish}>
            <Form.Item name="title" rules={[{ required: true, message: 'Please input your title!' }]}>
                <Input placeholder='Title'></Input>
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true, message: 'Please input your description!' }]}>
                <Input placeholder='Description'></Input>
            </Form.Item>
            <Form.Item name="ingredients" rules={[{ required: true, message: 'Please input your ingredients!' }]}>
                <Input placeholder='Ingredients (comma separated)'></Input>
            </Form.Item>
            <Form.Item name="instructions" rules={[{ required: true, message: 'Please input your instructions!' }]}>
                <Input placeholder='Instructions'></Input>
            </Form.Item>
            <Form.Item name="category" rules={[{ required: true, message: 'Please input your category!' }]}>
                <Input placeholder='Category'></Input>
            </Form.Item>
            <Form.Item>
                <Upload fileList={media} beforeUpload={() => false} onChange={handleUpload} multiple>
                    <Button icon={<UploadOutlined />}>Upload Media</Button>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>Add Recipe</Button>
            </Form.Item>
        </Form>
    )
}

export default AddRecipe
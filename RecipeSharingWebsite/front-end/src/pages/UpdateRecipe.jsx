import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateRecipe() {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [media, setMedia] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/apiRecipe/recipes/${recipeId}`)
            .then(response => setRecipe(response.data))
            .catch(error => message.error('Failed to fetch recipe!'))
    }, [recipeId]);

    const handleUpload = ({ fileList }) => setMedia(fileList);

    const onFinish = async (values) => {
        setLoading(true);
        debugger
        const formData = new FormData();

        Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
        })
        media.forEach(file => {
            formData.append('media', file.originFileObj)
            console.log("media:--- " + file.originFileObj.name);
        });

        try {
            const response = await fetch(`http://localhost:3000/apiRecipe/recipes/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: formData
            });

            if (response.ok) {
                message.success('Recipe updated successfully');
                setLoading(false);
                navigate('/')
            }

        } catch (error) {
            console.error('Error updating recipe:', error);
            setLoading(false);
        }

        // axios.post(`http://localhost:3000/apiRecipe/recipes/${recipeId}`, formData, {
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(response => {
        //         message.success('Recipe updated successfully!');
        //         setLoading(false);
        //         navigate('/');
        //     })
        //     .catch(error => {
        //         message.error('Failed tp add recipe!');
        //         setLoading(false);
        //     })
    };

    if (!recipe) return null;
    return (
        <Form name='update-recipe' initialValues={recipe} onFinish={onFinish}>
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
                <Button type='primary' htmlType='submit' loading={loading}>Update Recipe</Button>
            </Form.Item>
        </Form>
    )
}

export default UpdateRecipe
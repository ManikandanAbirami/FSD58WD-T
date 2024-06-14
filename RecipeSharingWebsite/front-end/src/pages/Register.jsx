import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        axios.post('http://localhost:3000/apiAuth/register', values)
            .then(response => {
                message.success('Registration successful');
                navigate('/login');
            }).catch(error => {
                message.error('Registration failed!');
                setLoading(false);
            })
    }
    return (
        <Form name='login' onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder='Username'></Input>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder='Email'></Input>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder='Password'></Input.Password>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>Register</Button>
            </Form.Item>
        </Form>
    )
}

export default Register
import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        axios.post('http://localhost:3000/apiAuth/login', values)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                message.success('Login successful');
                navigate('/');
            }).catch(error => {
                message.error('Login failed!');
                setLoading(false);
            })
    }
    return (
        <Form name='login' onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder='Email'></Input>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder='Password'></Input.Password>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>Login</Button>
            </Form.Item>
        </Form>
    )
}

export default Login
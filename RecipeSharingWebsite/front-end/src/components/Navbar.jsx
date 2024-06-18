import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Layout, Menu, message, Button } from 'antd'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const { Header } = Layout;

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchUserDetails = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3000/apiAuth/user/details', {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             });
    //             setUser(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user details:', error);
    //         }
    //     };
    //     fetchUserDetails();
    // }, []);

    const handleLogout = () => {
        // localStorage.removeItem('token');
        // setUser(null);
        logout();
        message.success('Successfully logged out!');
        navigate('/login');
    }

    const menu = (
        <Menu>
            <Menu.Item key='logout' onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    )
    return (
        <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                {user && user.role === 'admin' && (
                    <>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/add-recipe">Add Recipe</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/update-recipe">Update Recipe</Link></Menu.Item>
                    </>
                )}
                {user && user.role === 'user' && (
                    <>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    </>
                )}
                {!user && (
                    <>
                        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/register">Register</Link></Menu.Item>
                    </>
                )}
                {user && (
                    <Menu.Item key="user" style={{ marginLeft: 'auto' }}>
                        {user.username} ({user.role})
                        <Dropdown overlay={menu} placement='bottomRight'>
                            <Button type="link">Logout</Button>
                        </Dropdown>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    )
}

export default Navbar
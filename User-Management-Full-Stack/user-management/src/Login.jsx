import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TextField, Button, Typography, Container, Snackbar, Alert } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/apiUser/login', { email, password });
            setSnackbar({ open: true, message: "Login successfull", severity: 'success' });
            navigate('/users');
        } catch (error) {
            setSnackbar({ open: true, message: "Login failed", severity: 'error' })
        }
    }
    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    }

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false })
    }
    return (
        <Container maxWidth="sm">
            <Typography variant='h4' gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Email" fullWidth margin='normal' value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                <TextField label="Password" type='password' fullWidth margin='normal' value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                <Button type='submit' variant='contained' color='primary' fullWidth>
                    Login
                </Button>
            </form>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity}
                    sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Login
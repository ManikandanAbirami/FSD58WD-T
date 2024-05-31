import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TextField, Button, Typography, Container, Snackbar, Alert } from '@mui/material';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/apiUser/register', { name, email, password });
            setSnackbar({ open: true, message: "User registered successfully", severity: 'success' });
            navigate('/login')
        } catch (error) {
            setSnackbar({ open: true, message: "Registration failed", severity: 'error' })
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
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" fullWidth margin='normal' value={name} onChange={(e) => setName(e.target.value)}></TextField>
                <TextField label="Email" fullWidth margin='normal' value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                <TextField label="Password" type='password' fullWidth margin='normal' value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                <Button type='submit' variant='contained' color='primary' fullWidth>
                    Register
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

export default Register
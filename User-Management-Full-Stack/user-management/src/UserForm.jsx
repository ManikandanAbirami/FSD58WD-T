import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'


function UserForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    }

    return (
        <Dialog open onClose={onCancel}>
            <DialogTitle>{user._id ? 'Edit User' : 'Add User'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    name='name'
                    label='Name'
                    type='text'
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}></TextField>
                <TextField
                    autoFocus
                    margin='dense'
                    name='email'
                    label='Email'
                    type='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color='primary'>Cancel</Button>
                <Button onClick={handleSubmit} color='primary'>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserForm
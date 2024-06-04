import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { ContactContext } from './ContactContext';

function ContactForm() {
    const { sendContactEmail } = useContext(ContactContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendContactEmail({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant='contained' color='primary'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default ContactForm
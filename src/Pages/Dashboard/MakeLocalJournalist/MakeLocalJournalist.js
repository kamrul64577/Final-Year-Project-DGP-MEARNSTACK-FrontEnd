import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeLocalJournalist = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleJournalistSubmit = e => {
        const user = { email };

        fetch('https://desolate-beyond-74023.herokuapp.com/users/localJournalist', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }

            })



        e.preventDefault();
    }
    return (
        <div className="pt-5 ps-5">
            <h2 className="pt-5">নতুন  সাংবাদিক যুক্ত করুন </h2>
            <form onSubmit={handleJournalistSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="ইমেইল "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">সাংবাদিক যুক্ত করুন </Button>
            </form>
            {
                success && <Alert severity="success">সফলভাবে সাংবাদিক যুক্ত হয়েছে !</Alert>

            }
        </div>
    );
};

export default MakeLocalJournalist;
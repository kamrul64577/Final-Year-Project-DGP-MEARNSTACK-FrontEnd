import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeServiceOfficer = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://desolate-beyond-74023.herokuapp.com/users/serviceOfficer', {
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
            <h2 className="pt-5">নতুন  সার্ভিস অফিসার  যুক্ত করুন </h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="ইমেইল "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">সার্ভিস অফিসার  যুক্ত করুন</Button>
            </form>
            {
                success && <Alert severity="success">সফলভাবে  সার্ভিস অফিসার  যুক্ত হয়েছে</Alert>

            }
        </div>
    );
};

export default MakeServiceOfficer;
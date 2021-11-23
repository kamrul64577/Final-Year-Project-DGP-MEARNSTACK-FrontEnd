import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeEventCoordinator = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('http://localhost:5000/users/eventCoordinator', {
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
            <h2 className="pt-5">নতুন  ইভেন্ট কোঅর্ডিনেটর যুক্ত করুন </h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="ইমেইল "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">ইভেন্ট কোঅর্ডিনেটর যুক্ত করুন</Button>
            </form>
            {
                success && <Alert severity="success">সফলভাবে  ইভেন্ট কোঅর্ডিনেটর  যুক্ত হয়েছে</Alert>

            }
        </div>
    );
};

export default MakeEventCoordinator;
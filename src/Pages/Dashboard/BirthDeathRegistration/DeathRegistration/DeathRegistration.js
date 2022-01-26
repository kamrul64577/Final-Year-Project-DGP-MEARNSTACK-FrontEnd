import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Axios from 'axios';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Swal from 'sweetalert2';

const DeathRegistration = () => {
    const [value, setValue] = React.useState(new Date('2021-08-18'));
    const [deathInfo, setDeathInfo] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newdeathInfo = { ...deathInfo }
        newdeathInfo[field] = value;
        setDeathInfo(newdeathInfo);

    }

    const handleAddDeath = e => {
        Axios.post('http://localhost:5000/death', {
            deathInfo,
            value

        })
            .then(() => {
                console.log('succesfully Insert')
            });
        Swal.fire(
            'Thank You For Registered Death',
            'Your Death Registration Successful',
            'success'
        )
        e.preventDefault();
    }
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <section className=" py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center  background-shadow bg-light py-5 shadow ">

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 mb-lg-4 mb-3 ">
                                    <h1 className=" text-dark">মৃত্যু সংক্রান্ত তথ্য</h1>
                                </div>
                                <form className="px-md-5 px-2" onSubmit={handleAddDeath}>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleOnChange} name="name" type="text" className="form-control rounded-pill" id="floatingInput" placeholder="নাম" />
                                            <label>আপনার নাম</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input onChange={handleOnChange} name="deathName" type="text" className="form-control rounded-pill" id="floatingInput" placeholder="নাম" />
                                            <label>মৃত ব্যাক্তির নাম</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="fatherName" className="form-control rounded-pill" id="floatingInput" placeholder="পিতার নাম" />
                                            <label>পিতার নাম</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="motherName" className="form-control rounded-pill" id="floatingInput" placeholder="মাতার নাম" />
                                            <label>মাতার নাম</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="relation" className="form-control rounded-pill" id="floatingInput" placeholder="মৃত ব্যক্তি আপনার কে?" />
                                            <label>মৃত ব্যক্তি আপনার কে ?</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="মৃত্যু তারিখ সিলেক্ট করুন "
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />

                                                </Stack>
                                            </LocalizationProvider>
                                        </div>

                                        <div className="gender-details">
                                            <label >লিঙ্গ</label><br /><br />
                                            <input name="gender" type="radio" id="মহিলা" value="মহিলা" onChange={handleOnChange} />
                                            <label>মহিলা</label>
                                            <input type="radio" id="পুরুষ" onChange={handleOnChange} name="gender" value="পুরুষ" />
                                            <label>পুরুষ</label>
                                            <input type="radio" id="অন্যান্য" onChange={handleOnChange} name="gender" value="অন্যান্য" />
                                            <label>অন্যান্য</label><br /><br />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="address" className="form-control rounded-pill" id="floatingInput" placeholder="জন্মস্থানের ঠিকানা" />
                                            <label>ঠিকানা </label>
                                        </div>

                                        <div className="submit-btn ">
                                            <input type="submit" className="btn btn-primary btn-lg" value="জমা দিন" />

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeathRegistration;
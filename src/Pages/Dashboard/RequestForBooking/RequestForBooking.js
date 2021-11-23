import React, { useEffect, useState, useRef } from 'react';
// import './RegisterForEvent.css'
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
const RegisterForEvent = () => {
    const [booking, setBooking] = useState({});
    const { user } = useAuth();



    // const nameRef = useRef('');
    const hallRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const mobileRef = useRef('');
    const dateRef = useRef('');

    
    console.log(booking);
    const handleBooking = e => {
        // const name = nameRef.current.value;
        const hall = hallRef.current.value;
        const name = userNameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;
        const date = dateRef.current.value;

        const newRegister = {
            hallName: hall, date: date, name: name, email: email, address: address, mobile: mobile, status: 'পেন্ডিং'}

        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Successfully Requested Booking');
                    // reset();
                }
            })



        e.preventDefault();
    };


    return (
        <div className="">
            <div className="place-order py-5 container">
                <h1>বিবাহের হল বুক করার জন্য ডান পাশের ফর্ম সঠিক ভাবে পূরণ করে জমা দিন ।</h1>
                <div className="border p-3 place-order-form">
                    <h2>ফর্ম  পূরণ করে জমা দিন</h2>
                    <form onSubmit={handleBooking} className="text-center mt-4">
                        {/* <input type="text" className="form-control" defaultValue={event._id || ''} ref={idRef} /> */}
                        {/* <input type="text" className="form-control" placeholder="Your Name" ref={nameRef}  /> */}
                        <input type="text" className="form-control" placeholder="হলের নাম " ref={hallRef}  />
                        <input type="text" className="form-control" defaultValue={user.displayName || ''} ref={userNameRef} />
                        <input type="text" className="form-control" placeholder="বুকিংয়ের তারিখ " ref={dateRef} />
                        <input type="email" className="form-control" defaultValue={user.email || ''} ref={emailRef} />
                        <input type="text" className="form-control" placeholder="আপনার ঠিকানা " ref={addressRef} />
                        <input type="number" className="form-control" placeholder="মোবাইল নাম্বার
" ref={mobileRef} />
                        <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" value="জমা দিন" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForEvent;
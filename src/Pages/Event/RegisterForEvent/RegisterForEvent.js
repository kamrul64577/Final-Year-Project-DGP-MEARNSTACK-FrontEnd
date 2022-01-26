import React, { useEffect, useState, useRef } from 'react';
import './RegisterForEvent.css'
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterForEvent = () => {
    const notify = () => toast("Registration processed successfully");
    const { eventId } = useParams();
    const [events, setEvent] = useState({});
    const { user } = useAuth();



    const eventNameRef = useRef('');
    const eventFeeRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const mobileRef = useRef('');
    const trxIdRef = useRef('');

    useEffect(() => {
        fetch(`http://localhost:5000/event/${eventId}`)
            .then(res => res.json())
            .then(data => setEvent(data.event))
    }, []);
    console.log(events);
    const handleRegister = e => {
        const eventName = eventNameRef.current.value;
        const eventFee = eventFeeRef.current.value;
        const name = userNameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;
        const trxId = trxIdRef.current.value;

        const newRegister = {eventName: eventName, trxId: trxId, eventFee: eventFee, name: name, email: email, address: address, mobile: mobile }

        fetch(`http://localhost:5000/registerEvent`, {
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
                    notify();
                    // reset();
                }
            })



        e.preventDefault();
    };


    return (
        <div>
            <ToastContainer/>
            <Navigation></Navigation>
            <div className="place-order py-5 container">
                <div className="border p-3">
                    <h1>ইভেন্টের সংক্রান্ত তথ্য </h1>
                    {/* <img className="img-fluid" src={event.img} alt="" /> */}
                    <h3>ইভেন্ট : {events.eventName}</h3>
                    <p className="">ইভেন্টের বিবরণ : {events.eventDescription}</p>
                    <h5 className="my-3 p-3 bg-light">আবেদন ফি:{events.eventFee}টাকা</h5>
                    <h6>স্থান: {events.eventPlace}</h6>
                    <h4 className="text-dark bg-light p-3">বিজয়ী পুরুষ্কার :{events.firstPrize}</h4>
                    <h5 className="text-dark bg-light p-3">রানারআপ পুরুস্কার : {events.secondPrize}</h5>
                    {/* <h5>eventFee: ${event.eventFee}</h5> */}
                </div>
                <div className="border p-3 place-order-form">
                    <h2>ইভেন্টের এর জন্য আবেদন করুন </h2>
                    <form onSubmit={handleRegister} className="text-center mt-4">
                        {/* <input type="text" className="form-control" defaultValue={event._id || ''} ref={idRef} /> */}
                        <input type="text" className="form-control" defaultValue={events.eventName || ''} ref={eventNameRef} readOnly />
                        <input type="text" className="form-control" defaultValue={events.eventFee  || ''} ref={eventFeeRef} readOnly />
                        <input type="text" className="form-control" defaultValue={user.displayName || ''} ref={userNameRef} />
                        <input type="text" className="form-control" placeholder="ট্রান্সেকশন আইডি" ref={trxIdRef} />
                        <input type="email" className="form-control" defaultValue={user.email || ''} ref={emailRef} />
                        <input type="text" className="form-control" placeholder="ঠিকানা " ref={addressRef} />
                        <input type="number" className="form-control" placeholder="মোবাইল " ref={mobileRef} />
                        <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" value="আবেদন করুন " />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RegisterForEvent;
import React, { useEffect, useState, useRef } from 'react';
// import './RegisterForEvent.css'
// import { useParams } from 'react-router';
// import Navigation from '../../Shared/Navigation/Navigation';
// import Footer from '../../Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddReliefSchedule = () => {
    const [relief, setRelief] = useState({});
    // const { user } = useAuth();
    const notify = () => toast("Successfully Relief Added");


    // const nameRef = useRef('');
    const reliefNameRef = useRef('');
    const addressRef = useRef('');
    const dateRef = useRef('');


    const handleRelief = e => {
        // const name = nameRef.current.value;
        const relief = reliefNameRef.current.value;
        const address = addressRef.current.value;
        const date = dateRef.current.value;

        const newRegister = {
            reliefName: relief, date: date, address: address
        }

        fetch(`https://desolate-beyond-74023.herokuapp.com/relief`, {
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
        <div className="">
            <ToastContainer/>
            <div className="place-order py-5 container">
                <h1>ত্রাণ বিতরণের বিবরণ </h1>
                <div className="border p-3 place-order-form">
                    <h2>ফর্ম  পূরণ করে এড করুন </h2>
                    <form onSubmit={handleRelief} className="text-center mt-4">
                        {/* <input type="text" className="form-control" defaultValue={event._id || ''} ref={idRef} /> */}
                        {/* <input type="text" className="form-control" placeholder="Your Name" ref={nameRef}  /> */}
                        <input type="text" className="form-control" placeholder="ত্রাণ সামগ্রী " ref={reliefNameRef} required/>
                        <input type="text" className="form-control" placeholder="ত্রাণ বিতরণের  তারিখ " ref={dateRef} required/>
                        <input type="text" className="form-control" placeholder="ত্রাণ বিতরণের স্থান " ref={addressRef} required/>
                      
                        <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" value="এড করুন" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReliefSchedule;
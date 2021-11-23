import Axios  from 'axios';
import React, { useState } from 'react';
import eventImg from '../../../../images/E.jpg'
const AddEvent = () => {
    const [event, setEvent] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newEvent = { ...event }
        newEvent[field] = value;
        setEvent(newEvent);

    }

    const handleAddEvent = e=> {
        Axios.post('http://localhost:5000/event', {
            event
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('Event added successfully')
        e.preventDefault();
    }
    return (
        <div>
            <section class="container-fluid  main-wrapper py-5">
                <div class="container">
                    <div class="row d-flex align-items-center rounded-pill bg-white shadow p-5">
                        <div class="col-md-6 p-0">
                            <img src={eventImg} alt="Event Image" class="img-fluid rounded-circle"/>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 mb-lg-4 mb-3 px-md-5">
                                    <h1 class="text-md-start text-center">এড ইভেন্ট</h1>
                                </div>
                                <form onSubmit={handleAddEvent} class="px-md-5 px-2">
                                    <div class="col-md-12">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="ইভেন্টের নাম" onChange={handleOnChange} name="eventName"/>
                                            <label for="floatingInput">ইভেন্টের নাম</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="ইভেন্টের স্থান" onChange={handleOnChange} name="eventPlace"/>
                                            <label for="floatingInput">ইভেন্টের স্থান</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="ইভেন্টের তারিখ" onChange={handleOnChange} name="eventDate" />
                                            <label for="floatingInput">ইভেন্টের তারিখ </label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="ইভেন্টের মাস"
                                                onChange={handleOnChange} name="eventMonth" />
                                            <label for="floatingInput">ইভেন্টের মাস</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="আবেদন ফি" onChange={handleOnChange} name="eventFee" />
                                            <label for="floatingInput">আবেদন ফি</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="ইভেন্টের বিবরণ" onChange={handleOnChange} name="eventDescription" />
                                            <label for="floatingInput">ইভেন্টের বিবরণ </label>
                                        </div>

                                        <div class="submit-btn ">
                                            <input type="submit" class="btn btn-primary btn-lg" value="এড করুন"/>

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

export default AddEvent;
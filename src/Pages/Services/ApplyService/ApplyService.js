import Axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './ApplyService.css'
export default function ApplyService() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [type, setType] = useState('');
    const [whyNeed, setWhyNeed] = useState('');

    const requestService = () => {
        Axios.post('http://localhost:5000/insertRequestService', {
            name: name,
            email: email,
            contact: contact,
            type: type,
            whyNeed: whyNeed
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        Swal.fire(
            'Thank you for your new Service request',
            'You have request new Services',
            'success'
        )
    }
    return (
        <>
            <Navigation></Navigation>
            <div class="new-service">
                <section className="request_for_installment">
                    <h1 className="tittle">নতুন সেবার জন্য আবেদন করুন </h1>
                    <div className="container">
                        <div className="contact-form row">
                            <div className="form-group col-lg-12">
                                <input id="name" className="input-text" type="text" name="name" placeholder="আপনার নাম " onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                                {/* <label for="name" className="label">name</label> */}
                            </div>
                            <div className="form-group col-lg-12">
                                <input id="email" className="input-text" type="email" name="email" placeholder="আপনার ইমেইল " onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                                {/* <label for="email" className="label">email</label> */}
                            </div>
                            <div className="form-group col-lg-12">
                                <input id="phone" className="input-text" type="text" name="contact" placeholder="আপনার মোবাইল নাম্বার" onChange={(e) => {
                                    setContact(e.target.value)
                                }} />
                                {/* <label for="phone" className="label">Contact number</label> */}
                            </div>
                            <div className="form-group col-lg-12">
                                <input id="Request" className="input-text" type="text" name="type" placeholder="কি ধরণের সার্ভিসের?" onChange={(e) => {
                                    setType(e.target.value)
                                }} />
                                {/* <label for="Request" className="label">Service type</label> */}
                            </div>

                            <div className="form-group col-lg-12">
                                <textarea id="message" className="input-text" type="text" name="whyNeed" placeholder="কেন এই সার্ভিস প্রয়োজন? " onChange={(e) => {
                                    setWhyNeed(e.target.value)
                                }}></textarea>
                                {/* <label for="message" className="label">Why You Need This Service?</label> */}
                            </div>
                            <div className="form-group col-lg-12">
                                <button onClick={requestService} className="submit-btn">আবেদন করুন</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

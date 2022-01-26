import Axios from 'axios';
import React, { useState } from 'react'
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './RepairApplication.css'
import Swal from 'sweetalert2'
import { useHistory, useLocation, useParams } from 'react-router';
export default function RepairApplication() {
    let history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [requestFor, setRequestFor] = useState('');
    const [description, setDescription] = useState('');

    const requestRepair = () => {
        Axios.post('http://localhost:5000/insertRepair', {
            name: name,
            email: email,
            contact: contact,
            requestFor: requestFor,
            description: description
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        Swal.fire(
            'thank you for your new Service request',
            'You have request new repairing',
            'success'
        )
        history.push('/home')
    }
    return (
        <div>
            <Navigation></Navigation>
            <section className="request_for_installment">
                <h1 className="title mb-5">মেরামতের জন্য আবেদন করুন </h1>
                <div className="container">
                    <div className="contact-form row">
                        <div className="form-field col-lg-6">
                            <textarea id="name" className="input-text" type="text" name="name" onChange={(e) => {
                                setName(e.target.value)
                            }}></textarea>
                            <label for="name" className="label">আপনার নাম</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="email" className="input-text" type="email" name="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}></textarea>
                            <label for="email" className="label">আপনার ইমেইল </label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="Request" className="input-text" type="text" name="requestFor" onChange={(e) => {
                                setRequestFor(e.target.value)
                            }}> </textarea>
                            <label for="Request" className="label">কিসের জন্য আবেদন করবেন ?</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="phone" className="input-text" type="text" name="contact" onChange={(e) => {
                                setContact(e.target.value)
                            }}> </textarea>
                            <label for="phone" className="label">আপনার মোবাইল নাম্বার</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <textarea id="message" className="input-text" type="text" name="description" onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                            <label for="message" className="label">কেনো এই সেবাটি আপনার প্রয়োজন?</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="আবেদন করুন" onClick={requestRepair} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

import React from 'react'
import './ContactUs.css'

import emailjs from "emailjs-com";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7w264rp', 'template_lj2ahsl', e.target, 'user_Tzk63u3RJr4YWhbY5Ji5u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const onButtonClickHandler = () => {
        window.alert('Thank You For Contact With Us')
    };
    return (
        <>
            <Navigation></Navigation>
            <section className="contact">
                <div className="content">
                    <h2>আমাদের সাথে যোগাযোগ করুন </h2>
                    <p>আমাদের যোগাযোগের পেইজে  আপনাকে  স্বাগতম</p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">ঠিকানা</h3>
                                <p className="line-hieght">রামধানা, বিশ্বনাথ,<br />সিলেট,<br />৩১০০</p>
                                <p className="line-hieght">তালতলা,সুরমা টাওয়ার<br />সিলেট,<br />৩১০০</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">মোবাইল নাম্বার</h3>
                                <p className="line-hieght">০১৭৭৩-৭৬৪৫৭৭</p>
                                <p className="line-hieght">০১৭০৯-০৩২৬৪৭</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-envelope-o"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">ইমেইল</h3>
                                <p className="line-hieght">Kamrulneubcse@gmail.com</p>
                                <p className="line-hieght">jannatfatema690@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form onSubmit={sendEmail} >
                            <h2>মেসেজ পাঠান </h2>
                            <div className="inputBox">
                                <input type="text" name="name" required="required" />
                                <span>আপনার নাম </span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" required="required" />
                                <span>আপনার ইমেইল </span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="subject" required="required" />
                                <span>সাবজেক্ট</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" name="message"></textarea>
                                <span>আপনার মেসেজ লিখুন ...</span>
                            </div>
                            <div className="inputBox">
                                <input onClick={onButtonClickHandler} type="submit" name="" value="পাঠান" />
                            </div>
                        </form>
                    </div>

                </div>

            </section>
            <Footer></Footer>
        </>
    )
}

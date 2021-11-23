import React from 'react'
import './AboutUs.css'
import about from '../../images/About.jpg'
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer'

export default function About() {
    return (
        <>
            <Navigation></Navigation>
            <div className="about-body">
                <div className="about-section">
                    <div className="pic-container">
                        <img src={about} alt="about-pic"></img>
                    </div>
                    <div className="inner-container">
                        <h1>আমাদের ওয়েব সাইট সম্পর্কীয় তথ্য</h1>
                        <p className="text">
                            {/* Digital gram panchayath is the first step towards building a science based society. It is only when members of panchayath have a little idea about technology.
                        So that, the people of the village can easily know about different service.In a Digital gram panchayath website, rural people will have digitally connected. People get different news easily. People can request for services. People will able to know about various events, relief distribution schedule and the marriage hall.
                        People will able to do various repairs such as road, drain and wells. */}
                            ডিজিটাল গ্রাম পঞ্চায়েত বিজ্ঞান ভিত্তিক সমাজ গঠনের প্রথম ধাপ। এটা তখনই হয় যখন পঞ্চায়েতের সদস্যদের প্রযুক্তি সম্পর্কে একটু ধারণা থাকে। যাতে, গ্রামের মানুষ সহজেই বিভিন্ন পরিষেবা সম্পর্কে জানতে পারে। মানুষ সহজেই বিভিন্ন সংবাদ পায়। লোকেরা পরিষেবার জন্য অনুরোধ করতে পারে। মানুষ বিভিন্ন অনুষ্ঠান, ত্রাণ বিতরণের সময়সূচী এবং বিবাহ হল সম্পর্কে জানতে পারবে। মানুষ রাস্তা, ড্রেন এবং কূপের মতো বিভিন্ন মেরামত করতে সক্ষম হবে।
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

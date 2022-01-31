import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Event.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'; 
const Event = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        Axios.get("https://desolate-beyond-74023.herokuapp.com/event")
            .then(data => {
                setEvent(data.data)
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            {/* {events.map(evnt => evnt.event.eventName)} */}
            <section className="event">
                <div class="leftBox">
                    
                    <div class="content">
                        <h1>ইভেন্ট সম্পর্কে তথ্য</h1>
                        <p>এখানে বিভিন্ন ইভেন্ট সম্পর্কে তথ্য দেয়া আছে।
                            ইভেন্ট এর বর্ণনা দেয়া আছে এবং আগ্রহীরা বিভিন্ন ইভেন্ট এর জন্য আবেদন করতে পারবে।ইভেন্টের তারিখের ২ দিন আগে আবেদন করতে হবে |
                            ডান পাশে আবেদন করুন বাটন এ  ক্লিক করে ফরম পূরণ করে ইভেন্ট এ অংশগ্রহণ করবে।</p>
                    </div>
                    
                </div>
                <div class="events">
                    <ul>
                       {
                           events.map(evnt => 
                               <Slide right cascade>
                               <li>
                                   <div class="time">
                                       <h2>{evnt.event.eventDate}<br /><span>{evnt.event.eventMonth}</span></h2>
                                   </div>
                                   <div class="details">
                                       <h3>{evnt.event.eventName}</h3>
                                       <p>{evnt.event.eventDescription}
                                       </p>
                                       <h6>স্থান: সিলেট স্টেডিয়াম</h6>
                                       <Link to={`/registerEvent/${evnt._id}`}>আবেদন করুন</Link>
                                       <span>আবেদন ফি:{evnt.event.eventFee}টাকা</span>
                                   </div>
                                   <div style={{ clear: 'both' }}></div>
                               </li>
                               </Slide>
                            )
                       }
                       
                    </ul>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Event;
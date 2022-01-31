import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewEvent = () => {
    const [event, setEvent] = useState([]);
    const notify = () => toast("Successfully Delete Event");
    useEffect(() => {
        fetch(`https://desolate-beyond-74023.herokuapp.com/event`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://desolate-beyond-74023.herokuapp.com/event/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify()
                        const remainingEvent = event.filter(event => event._id !== id);
                        setEvent(remainingEvent);
                    }
                })
        }

    }

    return (
        <div>
            <ToastContainer />
            <h1 className="text-center pb-2">ইভেন্টসমূহ</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>ইভেন্টের নাম</th>
                            <th>ইভেন্টের স্থান</th>
                            <th>ইভেন্টের তারিখ</th>
                            <th>ইভেন্টের মাস</th>
                            <th>আবেদন ফি</th>
                            <th>ইভেন্টের বিবরণ</th>

                            <th>একশন </th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            event.map(ev =>
                                <tr>
                                    <td>{ev.event.eventName}</td>
                                    <td>{ev.event.eventPlace}</td>
                                    <td>{ev.event.eventDate}</td>
                                    <td>{ev.event.eventMonth}</td>
                                    <td>{ev.event.eventFee}</td>
                                    <td>{ev.event.eventDescription}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteEvent(ev._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট</button>
                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;




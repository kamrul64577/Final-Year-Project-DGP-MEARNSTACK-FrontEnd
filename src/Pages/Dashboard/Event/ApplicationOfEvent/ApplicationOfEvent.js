import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ApplicationOfEvent = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/registerEvent`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/registerEvent/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingEvent = event.filter(event => event._id !== id);
                        setEvent(remainingEvent);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">আবেদনকৃত ইভেন্টসমূহ</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>ইভেন্টের নাম</th>
                            <th>আবেদন ফি</th>
                            <th>ট্রান্সেকশন আইডি</th>
                            <th>নাম</th>
                            <th>ইমেইল</th>
                            <th>মোবাইল</th>
                            <th>ঠিকানা</th>




                            <th>একশন </th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            event.map(ev =>
                                <tr>
                                    <td>{ev.eventName}</td>
                                    <td>{ev.eventFee}</td>
                                    <td>{ev.trxId}</td>
                                    <td>{ev.name}</td>
                                    <td>{ev.email}</td>
                                    <td>{ev.mobile}</td>
                                    <td>{ev.address}</td>


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

export default ApplicationOfEvent;

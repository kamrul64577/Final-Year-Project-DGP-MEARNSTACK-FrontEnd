import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewBooking = () => {
    const [booking, setBooking] = useState([]);
    const notify = () => toast("Booking Status Changed");
    useEffect(() => {
        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking]);

    const handleOption = (e, id) => {
        const updateStatus = e.target.value;
        let modifiedStatus = [];
        if (booking._id === id) {
            booking.status = e.target.value;
        }
        modifiedStatus.push(booking);
        const modifiedStatusProducts = { id, updateStatus };
        fetch('http://localhost:5000/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedStatusProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    notify();
                };
            })
    }

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingBooking = booking.filter(book => book._id !== id);
                        setBooking(remainingBooking);
                    }
                })
        }

    }

    return (
        <div>
            <ToastContainer/>
            <h1 className="text-center pb-2">সকল বুকিং</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>হলের নাম</th>
                            <th>বুকিংয়ের তারিখ</th>
                            <th>নাম</th>
                            <th>মোবাইল</th>
                            <th>ইমেইল</th>
                            <th>স্টেটাস</th>

                            <th>একশন</th>
                            <th>অনুমোদন</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            booking.map(bk =>
                                <tr>
                                    <td>{bk.hallName}</td>
                                    <td>{bk.date}</td>
                                    <td>{bk.name}</td>
                                    <td>{bk.mobile}</td>
                                    <td>{bk.email}</td>
                                    <td>{bk.status}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteBooking(bk._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট</button>
                                    </td>
                                    <td>
                                        <Form.Select size="md" defaultValue={bk.status} onChange={(e) => handleOption(e, bk._id)} className="w-100">
                                            <option value="Pending">পেন্ডিং</option>
                                            
                                            
                                            <option value="Processing">প্রক্রিয়াধীন</option>
                                            <option value="Approved">অনুমোদিত</option>
                                        </Form.Select>
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

export default ViewBooking;



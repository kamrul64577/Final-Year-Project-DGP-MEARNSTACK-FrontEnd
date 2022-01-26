import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewReliefSchedule = () => {
    const [relief, setRelief] = useState([]);
    const notify = () => toast("Delete data successfully");
    useEffect(() => {
        fetch(`http://localhost:5000/relief`)
            .then(res => res.json())
            .then(data => setRelief(data))
    }, [relief]);

  

    const handleDeleteRelief = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/relief/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify();
                        const remainingRelief = relief.filter(book => book._id !== id);
                        setRelief(remainingRelief);
                    }
                })
        }

    }

    return (
        <div>
            <ToastContainer />
            <h1 className="text-center pb-2">ত্রাণ সমূহ </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>ত্রাণ সামগ্রী </th>
                            <th>ত্রাণ বিতরণের তারিখ</th>
                            <th>ত্রাণ বিতরণের স্থান </th>
                            

                            <th>একশন</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            relief.map(bk =>
                                <tr>
                                    <td>{bk.reliefName}</td>
                                    <td>{bk.date}</td>
                                    <td>{bk.address}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteRelief(bk._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট</button>
                                    </td>
                                    {/* <td>
                                        <Form.Select size="md" defaultValue={bk.status} onChange={(e) => handleOption(e, bk._id)} className="w-100">
                                            <option value="Pending">পেন্ডিং</option>


                                            <option value="Processing">প্রক্রিয়াধীন</option>
                                            <option value="Approved">অনুমোদিত</option>
                                        </Form.Select>
                                    </td> */}
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewReliefSchedule;



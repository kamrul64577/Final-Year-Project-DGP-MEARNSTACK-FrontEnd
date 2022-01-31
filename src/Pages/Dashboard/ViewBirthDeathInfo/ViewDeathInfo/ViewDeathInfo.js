import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewDeathInfo = () => {
    const [death, setDeath] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-beyond-74023.herokuapp.com/death`)
            .then(res => res.json())
            .then(data => setDeath(data))
    }, []);

    const handleDeleteDeath = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://desolate-beyond-74023.herokuapp.com/death/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Successfully Deleted',
                            'Your File has been Deleted',
                            'success'
                        )
                        const remainingdeath = death.filter(death => death._id !== id);
                        setDeath(remainingdeath);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">মৃত্যু নিবন্ধন তথ্যসমূহ </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>তথ্য প্রধানকারীর নাম </th>
                            <th>নাম</th>
                            <th>পিতার নাম</th>
                            <th>মাতার নাম</th>
                            <th>আপনার কে হন?</th>
                            <th>লিঙ্গ</th>
                            <th>ঠিকানা</th>
                            <th>মৃত্যু তারিখ</th>

                            <th>একশন </th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            death.map(ev =>
                                <tr>
                                    <td>{ev.deathInfo.name}</td>
                                    <td>{ev.deathInfo.deathName}</td>
                                    <td>{ev.deathInfo.fatherName}</td>
                                    <td>{ev.deathInfo.motherName}</td>
                                    <td>{ev.deathInfo.relation}</td>
                                    <td>{ev.deathInfo.gender}</td>
                                    <td>{ev.deathInfo.address}</td>
                                    <td>{ev.value.slice(0, 10)}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteDeath(ev._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট</button>
                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ViewDeathInfo;




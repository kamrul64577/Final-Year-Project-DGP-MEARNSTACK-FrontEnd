import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './RequestRepairing.css'
const RequestRepairing = () => {
    const [requestRepairing, setRequestedRepairing] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-beyond-74023.herokuapp.com/requestRepairing`)
            .then(res => res.json())
            .then(data => setRequestedRepairing(data))
    }, []);


    // Delete Requested
    const handleDeleteRequestRepairing = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://desolate-beyond-74023.herokuapp.com/requestRepairing/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remainingRepairing = requestRepairing.filter(repair => repair._id !== id);
                        setRequestedRepairing(remainingRepairing);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-4">অনুরোধকৃত মেরামতসমূহ এখানে সংরক্ষিত আছে </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>নাম </th>        
                            <th>ইমেইল</th>
                            <th>মোবাইল নাম্বার</th>
                            <th>ধরণ </th>
                            <th>কেন এটি প্রয়োজন?</th>
                            <th>একশন</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            requestRepairing.map(repair => 
                                <tr>
                                    <td>{repair.name}</td>
                                    <td>{repair.email}</td>
                                    <td>{repair.contact}</td>
                                    <td style={{ maxWidth: '150px' }}>{repair.requestFor}</td>
                                    <td style={{ maxWidth: '150px' }}>{repair.description}</td>

                                    <td data-label="Action"><button onClick={() => handleDeleteRequestRepairing(repair._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট</button></td>
                                </tr>
                                )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestRepairing;




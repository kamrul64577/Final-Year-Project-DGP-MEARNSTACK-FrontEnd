import React, { useEffect, useState } from 'react';

const RequestServices = () => {
    const [requestServices, setRequestedService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/requestServices`)
        .then(res => res.json())
        .then(data => setRequestedService(data))
    }, [])


    // Delete Requested
    const handleDeleteRequestService = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/requestServices/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingServices = requestServices.filter(service => service._id !== id);
                        setRequestedService(remainingServices);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-4">অনুরোধ করা নতুন পরিষেবা এখানে সংরক্ষিত আছে </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">
                   
                    <table className="table">
                        <tr>
                            <th>নাম </th>       
                            <th>ইমেইল</th>
                            <th>মোবাইল নাম্বার</th>
                            <th>ধরণ</th>
                            <th>কেন এটি প্রয়োজন?</th>
                            <th>একশন</th>

                        </tr>
            {
                requestServices.map(service => 
                
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.contact}</td>
                                <td style={{maxWidth:'150px'}}>{service.type}</td>
                                <td style={{maxWidth:'150px'}}>{service.whyNeed}</td>

                        <td data-label="Action"><button onClick={() => handleDeleteRequestService(service._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট </button></td>
                            </tr>
                        
            
                )
            }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestServices;




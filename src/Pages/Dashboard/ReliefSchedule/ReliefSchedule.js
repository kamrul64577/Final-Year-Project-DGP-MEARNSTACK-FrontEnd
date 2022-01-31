import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReliefSchedule = () => {
    const [relief, setRelief] = useState([]);
    const notify = () => toast("Delete data successfully");
    useEffect(() => {
        fetch(`https://desolate-beyond-74023.herokuapp.com/relief`)
            .then(res => res.json())
            .then(data => setRelief(data))
    }, [relief]);




    return (
        <div>
            <ToastContainer />
            <h1 className="text-center pb-2">ত্রাণ সমূহ </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">
                    <div className="row">
                        {
                            relief.map(bk =>
                                // <tr>
                                //     <td>{bk.reliefName}</td>
                                //     <td>{bk.date}</td>
                                //     <td>{bk.address}</td>



                                // </tr>
                                <div className="col-lg-6 ">
                                    <div class="card text-center m-4 bg-dark text-light">
                                        <div class="card-header bg-light text-dark">
                                            ত্রাণের বিবরণ 
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">ত্রাণ সামগ্রী: {bk.reliefName}</h5>
                                            <p class="card-text">ত্রাণ বিতরণের স্থান: {bk.address}</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                        <div class="card-footer text-muted bg-light text-dark">
                                            ত্রাণ বিতরণের তারিখ: {bk.date}
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReliefSchedule;



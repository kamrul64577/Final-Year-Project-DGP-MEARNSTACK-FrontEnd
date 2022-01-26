import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Swal from 'sweetalert2'
const Success = () => {
    let history = useHistory()
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${id}`)
            .then(res => setService(res.data))
    }, [id])
    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: service?.val_id
        }
        axios.post(`http://localhost:5000/validate`, data)
            .then(res => {
                if (res.data) {
                    Swal.fire(
                        'Your Order Successfull',
                        'You clicked the Confirm Button!',
                        'success'
                    )
                    history.push('/home')
                }
            })
    }

    return (
        <main>
            <Navigation></Navigation>
            <div className="container">
                <div className="col-md-10">
                    <div className="card bg-light p-5 ">
                        <h1 className="text-center text-success">আপনার পেমেন্ট সফলভাবে সম্পন্ন হয়েছে  </h1>
                        <h5 className="text-center py-3">আপনার অর্ডার টি  সফলভাবে সম্পন্ন করতে দয়া করে  কনফার্ম বাটনে ক্লিক।</h5>
                        <h4 className="text-center pb-4">ধন্যবাদ </h4>
                        <button type="submit" className="btn btn-lg w-50 mx-auto btn-warning" onClick={validatePayment}>কনফার্ম</button>
                    </div>
                </div>
                 
            </div>
            <Footer></Footer>
        </main>
    );
};

export default Success;
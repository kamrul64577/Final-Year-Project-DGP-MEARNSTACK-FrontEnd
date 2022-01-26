import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth();
    useEffect(() => {
        Axios.get(`http://localhost:5000/services/${serviceId}`)
            .then(data => {
                setService(data.data)
            })
    }, [])
console.log(user.displayName)
    console.log(user.email)
    const purchase = () => {
        const info = {
            product_name: service?.name,
            product_profile: service?.description,
            // product_image: service?.imageURL,
            total_amount: service?.regFee,
            cus_name: user?.displayName,
            cus_email: user?.email

        }
        fetch(`http://localhost:5000/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.replace(data)
            })

    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row w-75">
                    <div className="col my-5">
                        <div class="card border-success mb-3 bg-dark text-white p-5" >
                            <div class="card-header bg-transparent border-success">ক্যাটেগরি: {service.categories}</div>
                            <div className="card-body">
                                <h3 className="card-title">{service.name}</h3>

                                <p className="card-text py-3">সার্ভিসের  বিবরণ : {service.description}</p>
                                <h4>রেজিস্ট্রেশন ফি: {service.regFee} ৳</h4>
                            </div>
                            <button onClick={purchase} className="btn btn-secondary text-light btn-lg w-50 mx-auto">পেমেন্ট করুন</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
<div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">Header</div>
    <div class="card-body text-success">
        <h5 class="card-title">Success card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="card-footer bg-transparent border-success">Footer</div>
</div>
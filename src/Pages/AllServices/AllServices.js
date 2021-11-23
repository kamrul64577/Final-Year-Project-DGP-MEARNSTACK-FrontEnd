import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './AllServices.css'
import { Link } from 'react-router-dom'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

export default function AllServices() {
    const [serviceList, setServiceList] = useState([]);
   

    useEffect(() => {
        Axios.get("http://localhost:5000/services")
            .then(response => {
                setServiceList(response.data)
            })
    }, [])
    return (
        // <h1>hi</h1>
       <>
            <Navigation></Navigation>
            <div class="service">
                <div className="container ">
                    <div className="row">
                        <h3 className="text-center py-3"> <Link to="/applyService" className="request">নতুন সার্ভিসের জন্য আবেদন করুন  </Link></h3>
                        <div className="col-lg-12">
                            {serviceList.map((val, key) => {
                                return <div>

                                    <div className=" my-5 ">

                                        <Card className="mx-4 bg-light" >
                                            <Card.Header>{val.categories}</Card.Header>
                                            <Card.Body className="p-5">
                                                <Card.Title className="fs-2">{val.name}</Card.Title>
                                                <Card.Text><p className="mt-3 bg-dark text-white w-25 p-2">এই সার্ভিসেস কেন প্রয়োজন?</p>
                                                    {val.description}
                                                </Card.Text>
                                                <Button variant="success">এই সেবাটির জন্য আবেদন করুন</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </div>
                            })}



                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
       </>
    )
}

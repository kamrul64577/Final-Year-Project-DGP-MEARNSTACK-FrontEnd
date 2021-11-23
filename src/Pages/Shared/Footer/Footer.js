import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <h4>ডিজিটাল গ্রাম পঞ্চায়েত</h4>
                            <p>সাপোর্ট </p>
                            <p>প্রাইভেসি পলিসি</p>
                        </Col>
                        <Col lg={3}>
                            <h3>সেবাসমূহ</h3>
                            <p>অফিসার এর কাছ থেকে পরামর্শ নিন</p>
                            <p>প্রতিক্রিয়া</p>
                            <p>প্রবন্ধ</p>
                        </Col>
                        <Col lg={3}>
                            <h3>সাপোর্ট</h3>
                            <p>অফিসারের সাথে রিয়েল টাইম চ্যাটকরুন </p>
                            <p>জরুরী সাহায্য </p>
                            {/* <p>Cookies Policy</p> */}
                        </Col>
                        <Col lg={3}>

                            <h3>আমাদের ঠিকানা</h3>
                            <p>রামধানা, বিশ্বনাথ</p>
                            <p>তালতলা, সুরমা টাওয়ার</p>
                            <p>সিলেট, ৩১০০</p>
                            <ul className="list-unstyled d-flex">
                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-facebook-messenger"></i></Link></li>
                            </ul>
                        </Col>
                        <p className="text-center pt-4">গ্রাম পঞ্চায়েত  &copy;  সর্বস্বত্ব সংরক্ষিত  </p>
                    </Row>
                </Container>
            </div>
        </>
    )
}

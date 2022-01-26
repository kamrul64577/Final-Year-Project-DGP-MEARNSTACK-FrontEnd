import React, { useEffect, useState } from 'react'
// import image from '../image/h3.jpg'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { Card, CardGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



import news1 from '../../../images/news-1.jpg'
import news2 from '../../../images/news-2.jpg'
import news3 from '../../../images/news-3.jpg'
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../../Shared/Footer/Footer'
import Axios  from 'axios'

export default function Home() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/news")
            .then(data => {
                setNews(data.data)
            })
    }, [])


    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }

    return (
        <>
            <Navigation></Navigation>
            {/* Header Section  */}
            <section className="banner d-flex justify-content-center align-items-center">
                <h1 className="text-white fst-italic"> ডিজিটাল ভিলেজে স্বাগতম

                    <br />{' '}
                    {/* Welcome To The Digital Village */}
                    <span className="span-color ms-5 ps-5">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['আমাদের ডিজিটাল গ্রামে স্বাগতম', 'যেকোন বিচারিক কাজের জন্য ডিজিটাল পঞ্চায়েত', 'সবাই ডিজিটালভাবে সংযুক্ত ', 'যে কোন ধরনের সেবা পেতে আবেদন করুন', 'সহজেই আপডেটেট  খবর পাবেন']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </section>

            <Container>
                <h3 className="repair_home my-4 text-light">আপনার কি নতুন  কিছু  তৈরি  বা মেরামত করা দরকার?  <Link to="/repair" className="read-more apply ps-5 ms-5 text-light">এখানে ক্লিক করুন</Link></h3>
                

            </Container>

            {/* News Section  */}
            <section>
                <div className="container">
                    
                    {/* <div className="news-body mb-5"> */}
                        {/* <CardGroup className="gap-5">
                            {
                                news.map(ns => 
                                    <Card className="news-card">
                                        <Card.Img className="card-img" variant="top" src={ns.image} />
                                        <Card.Body>
                                            <Card.Title>{ns.title}</Card.Title>
                                            <Card.Text>
                                                {ns.description.slice(1,125)} .......
                                            </Card.Text>
                                            <Link to={`/newsDetails/${ns._id}`} className="read-more">আরো পড়ুন  </Link>
                                        </Card.Body>
                                    </Card>
                                    )
                            }
                           
                        </CardGroup> */}

                        <div className="row mb-5">
                            <div className="text-center pt-5 w-100">
                                <h1 className="news-header">আপডেট খবর পেতে আমাদের সাথে থাকুন </h1>
                                <p className="news-subHeader">সাম্প্রতিক খবর </p>
                            </div>
                               
                                    {
                                        news.map(ns =>
                                            <div className="col-lg-6  h-50">
                                            <div className="card-group ">
                                            <div className="news-card card">
                                                <img className="card-img" variant="top" src={ns.image} />
                                                        {/* <img src={`data:image/jpeg;base64,${ns.profilePic}`} alt="" /> */}
                                                <div className="card-body">
                                                            <div className="card-title"><h4>{ns.title}</h4></div>
                                                    <p className="card-text">
                                                        {ns.description.slice(1, 120)} .......
                                                    </p>
                                                    <Link to={`/newsDetails/${ns._id}`} className="read-more">আরো পড়ুন  </Link>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        )
                                    }
                               
                            

                        </div>
                    </div>
                {/* </div> */}
            </section>
            <Footer></Footer>
        </>
    )
}

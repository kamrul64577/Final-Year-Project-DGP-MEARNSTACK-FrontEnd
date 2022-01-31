import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Axios from 'axios'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer'
const NewsDetails = () => {
    const {newsId} = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        Axios.get(`https://desolate-beyond-74023.herokuapp.com/news/${newsId}`)
            .then(data => {
                setNews(data.data)
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row w-75">
                    <div className="col">
                        <div className="card mb-3">
                            <img src={news.image} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">{news.description}</p>
                            </div>
                        </div>
                            
                                
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;
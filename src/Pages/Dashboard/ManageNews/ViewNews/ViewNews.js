import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewNews = () => {
    const notify = () => toast("Successfully Delete News");
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/News`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);

    const handleDeleteNews = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/news/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify();
                        const remainingNews = news.filter(news => news._id !== id);
                        setNews(remainingNews);
                    }
                })
        }

    }

    return (
        <div>
            <ToastContainer/>
            <h1 className="text-center pb-2">খবরসমূহ </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>শিরোনাম</th>       
                            <th>বিবরণ</th>
                            <th>ইমেজ ইউ আর এল</th>

                            <th>একশন</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            news.map(ns =>
                                <tr>
                                    <td>{ns.title}</td>
                                    <td>{ns.description}</td>
                                    <td><img  style={{width:'100px', height:'100px'}} src={ns.image} alt="" /></td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteNews(ns._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>ডিলেট </button>

                                        <button className="btn " style={{ backgroundColor: '#A3A9A4', marginTop: '5px' }} ><Link to={`/dashboard/updateNews/${ns._id}`} style={{ textDecoration: 'none', color: 'white' }}>আপডেট </Link></button>

                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewNews;




import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Textarea from 'muicss/lib/react/textarea';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateNews = () => {
    const notify = () => toast("Successfully Updated News");
    const { newsId } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const url = `https://desolate-beyond-74023.herokuapp.com/news/${newsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);



    // update title
    const handleTitleChange = e => {
        const updateTitle = e.target.value;
        const updateNews = { title: updateTitle, image: news.image, description: news.description };
        setNews(updateNews)
    }
    // update User Email 
    const handleImageChange = e => {
        const updateImage = e.target.value;
        const updateNews = { title: news.title, image: updateImage, description: news.description };
        setNews(updateNews)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateNews = { title: news.title, image: news.image, description: updateDescription };
        setNews(updateNews)
    }

    const handleUpdateNews = e => {
        const url = `https://desolate-beyond-74023.herokuapp.com/news/${newsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(news)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    notify();
                    setNews({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <ToastContainer/>
            <h1> নিউজ  আপডেট করুন </h1>
            <form onSubmit={handleUpdateNews}>
                {/* <input type="text" onChange={handletitleChange} value={services.title || ''} />
                <input type="text" onChange={handlePriceChange} value={services.price || ''} />
                <textarea type="text" onChange={handleDescriptionChange} value={services.description || ''} /> */}

                <TextField
                    onChange={handleTitleChange}
                    sx={{ width: '50%', m: 1,p:3 }}
                    id="standard-basic"
                    value={news.title || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleImageChange}
                    sx={{ width: '50%', m: 1, p: 3}}
                    id="standard-basic"
                    value={news.image || ''}
                    type="text"
                    variant="standard"
                />
                <textarea
                    className="form-control"
                    onChange={handleDescriptionChange}
                    style={{ width: '60%', m: 1, p: 3 }}
                    id="standard-basic"
                    value={news.description || ''}
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>আপডেট</Button>
            </form>
        </div>
    );
};

export default UpdateNews;
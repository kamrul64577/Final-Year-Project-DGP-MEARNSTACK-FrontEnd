import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Textarea from 'muicss/lib/react/textarea';
const UpdateNews = () => {
    const { newsId } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/news/${newsId}`;
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
        const url = `http://localhost:5000/news/${newsId}`;
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
                    alert('Updated successfully')
                    setNews({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2>This is Update News Page</h2>
            <h3>Title: {news.name}</h3>
            <form onSubmit={handleUpdateNews}>
                {/* <input type="text" onChange={handletitleChange} value={services.title || ''} />
                <input type="text" onChange={handlePriceChange} value={services.price || ''} />
                <textarea type="text" onChange={handleDescriptionChange} value={services.description || ''} /> */}

                <TextField
                    onChange={handleTitleChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={news.title || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleImageChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={news.image || ''}
                    type="text"
                    variant="standard"
                />
                <textarea
                    className="form-control"
                    onChange={handleDescriptionChange}
                    style={{ width: '60%', m: 1 }}
                    id="standard-basic"
                    value={news.description || ''}
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>
            </form>
        </div>
    );
};

export default UpdateNews;
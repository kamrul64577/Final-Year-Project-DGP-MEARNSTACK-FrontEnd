import React, { useState } from 'react';
import Axios from 'axios';
const AddNews = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleAddNews = e => {
        Axios.post('http://localhost:5000/insertNews', {
            title,
            image,
            description
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('News added successfully')
        e.preventDefault();
    }

    return (
        <div className="bg-light">
            <h1 className="text-center py-3">নতুন  খবর  যুক্ত করুন</h1>
            <form onSubmit={handleAddNews} className="w-75 mx-auto">
                <div className="mb-3">
                    <label className="form-label">শিরোনাম</label>   
                    <input type="text" className="form-control" name="title" onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">ইমেজ ইউ আর এল</label>
                    <input type="text" className="form-control" name="image" onChange={(e) => {
                        setImage(e.target.value)
                    }}/>
                </div>
                <div className="mb-3 form-check">
                    <label for="exampleInputPassword1" className="form-label">বিবরণ</label>
                    <textarea className="form-control" onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">সাবমিট করুন</button>
            </form>
        </div>
    );
};

export default AddNews;
import React, { useState } from 'react';
import Axios from 'axios';
const AddNewService = () => {
    const [name, setName] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    
    const handleAddService = () => {
        Axios.post('http://localhost:5000/services', {
            name: name,
            categories: categories,
            description:description
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('thank you for Adding new Service ')
    }

    return (
        <div>
            <div id="categories" className="py-3">
                <div className="container py-4">
                    <div className="contact-form row">
                        <div className="form-group col-lg-12">
                            <input id="name" className="input-text" type="text" name="name" placeholder="সার্ভিসের নাম " onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            {/* <label for="name" className="label">name</label> */}
                        </div>
                        
                        
                        <div className="form-group col-lg-12">
                            <input id="Request" className="input-text" type="text" name="type" placeholder="কি ধরণের সার্ভিস ?" onChange={(e) => {
                                setCategories(e.target.value)
                            }} />
                            {/* <label for="Request" className="label">Service type</label> */}
                        </div>

                        <div className="form-group col-lg-12">
                            <textarea id="message" className="input-text" type="text" name="whyNeed" placeholder="সার্ভিসের  বিবরণ ? " onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                            {/* <label for="message" className="label">Why You Need This Service?</label> */}
                        </div>
                        <div className="form-group col-lg-12">
                            <button onClick={handleAddService} className="submit-btn">এড করুন</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewService;
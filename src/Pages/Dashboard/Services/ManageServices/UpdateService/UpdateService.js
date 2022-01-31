import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Textarea from 'muicss/lib/react/textarea';
import Swal from 'sweetalert2'
const UpdateService = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState({});

    useEffect(() => {
        const url = `https://desolate-beyond-74023.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    // update title
    const handleNameChange = e => {
        const updateTitle = e.target.value;
        const updateService = { name: updateTitle, categories: services.categories, description: services.description };
        setServices(updateService)
    }
    // update User Email 
    const handleCategoriesChange = e => {
        const updateCategories = e.target.value;
        const updateProduct = { name: services.name, categories: updateCategories, description: services.description };
        setServices(updateProduct)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateProduct = { name: services.name, categories: services.categories, description: updateDescription };
        setServices(updateProduct)
    }

    const handleUpdateService = e => {
        const url = `https://desolate-beyond-74023.herokuapp.com/services/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Successfully Updated',
                        'You clicked the Update button!',
                        'success'
                    )
                    setServices({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2 className="m-5">সার্ভিসটি  আপডেট করুন </h2>
            <form onSubmit={handleUpdateService}>
                {/* <input type="text" onChange={handletitleChange} value={services.title || ''} />
                <input type="text" onChange={handlePriceChange} value={services.price || ''} />
                <textarea type="text" onChange={handleDescriptionChange} value={services.description || ''} /> */}

                <TextField
                    className="form-control bg-light p-3"
                    onChange={handleNameChange}
                    sx={{ width: '80%', m: 1 }}
                    id="standard-basic"
                    value={services.name || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    className="form-control bg-light p-3"
                    onChange={handleCategoriesChange}
                    sx={{ width: '80%', m: 1 }}
                    id="standard-basic"
                    value={services.categories || ''}
                    type="text"
                    variant="standard"
                />
                <textarea
                    className="form-control bg-light p-3"
                    onChange={handleDescriptionChange}
                    style={{ width: '82%', m: 1, height:'110px' }}
                    id="standard-basic"
                    value={services.description || ''}
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>আপডেট করুন </Button>
            </form>
        </div>
    );
};

export default UpdateService;
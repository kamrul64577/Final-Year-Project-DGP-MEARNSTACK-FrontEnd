import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import './AddProducts.css';
import axios from "axios";
import Swal from 'sweetalert2'
import useAuth from "../../../../hooks/useAuth";
import {
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    Grid,
} from "@mui/material";
const AddNews = () => {
    // const { register, handleSubmit, reset } = useForm();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    
    const [profilepic, setProfilePic] = useState(null);
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!profilepic) {
        //     return;
        // }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        formData.append("description", description);
        // formData.append("profilepic", profilepic);

        fetch("http://localhost:5000/insertNews", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Added',
                        'You clicked the Add button!',
                        'success'
                    )
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h2 className="pt-1 text-center ">নতুন  খবর  যুক্ত করুন</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} style={{ textAlign: "center" }}>
                    <Grid item md={12}>
                       
                        <br />
                        <TextField
                            sx={{ width: "75%", marginTop: "10px" }}
                            required
                            id="standard-basic"
                            label="শিরোনাম"
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            variant="standard"
                            style={{ width: "75%", marginTop: "10px", height: "100px" }}
                        />
                        <TextField
                            onChange={(e) => setImage(e.target.value)}
                            label="ইমেজ ইউআরএল "
                            aria-label="maximum height"
                            variant="standard"
                            style={{ width: "75%", marginTop: "10px", height: "100px" }}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            sx={{ width: "75%" }}
                            required
                            id="standard-basic"
                            label="বিবরণ"
                            onChange={(e) => setDescription(e.target.value)}
                            name="site"
                            variant="standard"
                            style={{ width: "75%", marginTop: "10px", height: "100px" }}
                        />
                        <p style={{ marginTop: "10px" }}>
                            ইমেজ{" "}
                            <Input
                                // accept="image/*"
                                // id="contained-button-file"
                                type="file"
                                // onChange={(e) => setProfilePic(e.target.files[0])}
                            />
                        </p>
                    </Grid>
                </Grid>
                <Button
                    style={{ width: "50%", marginLeft: "240px", fontSize:"20px" }}
                    variant="contained"
                    type="submit"
                >
                    সাবমিট করুন
                </Button>
            </form>
        </div>
    );
};

export default AddNews;

















// import React, { useState } from 'react';
// import Axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const AddNews = () => {
//     const notify = () => toast("Successfully Added News");
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState('');
//     const [description, setDescription] = useState('');
//     const [img, setImg] = useState(null);

//     const handleAddNews = e => {
//         Axios.post('http://localhost:5000/insertNews', {
//             title,
//             image,
//             description,
//             img
//         })
//             .then(() => {
//                 console.log('succesfully Insert')
//             });
//         notify();
//         e.preventDefault();
//     }

//     return (
//         <div className="bg-light">
//             <ToastContainer/>
//             <h1 className="text-center py-3">নতুন  খবর  যুক্ত করুন</h1>
//             <form onSubmit={handleAddNews} className="w-75 mx-auto">
//                 <div className="mb-3">
//                     <label className="form-label">শিরোনাম</label>   
//                     <input type="text" className="form-control" name="title" onChange={(e) => {
//                         setTitle(e.target.value)
//                     }} required/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">ইমেজ ইউ আর এল</label>
//                     <input type="text" className="form-control" name="image" onChange={(e) => {
//                         setImage(e.target.value)
//                     }} required/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <label for="exampleInputPassword1" className="form-label">বিবরণ</label>
//                     <textarea className="form-control" onChange={(e) => {
//                         setDescription(e.target.value)
//                     }} required/>
//                 </div>
//                 <input type="file"  accept="image/*"  onChange={(e) => {
//                     setImg(e.target.files[0])
//                 }} />
//                 <button type="submit" className="btn btn-primary">সাবমিট করুন</button>
//             </form>
//         </div>
//     );
// };

// export default AddNews;
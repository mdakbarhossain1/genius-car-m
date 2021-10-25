import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services',data)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-services">
            <h2>Please Add a services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
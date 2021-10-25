import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // console.log(services);


    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }
            })
    }



    return (
        <div>
            <h2>Manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageServices;
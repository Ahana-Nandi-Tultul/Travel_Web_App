import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useParams } from 'react-router-dom';

const One_Destination = () => {
    const param_id = useParams();
    const id = param_id.id;
    const [one_destination, setOne_destination] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/one_destination/${id}`)
        .then(res => res.json())
        .then(data => setOne_destination(data))
    }, [])
    return (
        <div>
            <Banner image={one_destination['front-image']} dir="Home / Destination / " 
            subdir = {one_destination.name} title={one_destination.name}></Banner>
        </div>
    );
};

export default One_Destination;
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

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
            <div className='md:w-10/12 p-4 my-20 mx-auto'>
                <div>
                <LazyLoad height={400}>
                    <img src={one_destination['big-image']} alt=""  className='h-[400px] w-full'/>
                </LazyLoad>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-5'>
                {
                        one_destination?.images?.map((tourImg, indx) => <div key={indx} className='h-[150px]'>
                            <img src={tourImg} alt="" className='h-full w-full' />
                        </div>)
                    }
                </div>
                <div className='my-16'>
                    <h2 className='text-4xl font-bold mb-4'>About {one_destination.name}</h2>
                    <p className='text-slate-500 leading-7'>{one_destination.about}</p>
                </div>
                <div className='my-16'>
                    <h2 className='text-2xl font-bold mb-4'>Basic Information</h2>
                    <div className='p-8 bg-slate-200 bg-opacity-50'>
                        <h4><span>Country</span><span>{one_destination.country}</span></h4>
                        <h4><span>Language</span><span>{one_destination.language}</span></h4>
                        <h4><span>Currency</span><span>{one_destination.currency}</span></h4>
                        <h4><span>Area</span><span>{one_destination.area}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default One_Destination;
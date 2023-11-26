import React, { useEffect, useState } from 'react';
import FeaturedSlider from './FeaturedSlider';

const Featured = () => {
    const [tours, setTours] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/features_tours')
        .then(res => res.json())
        .then(data => setTours(data));
    }, [])
    return (
        <div className='py-20 bg-blue-950'>

            <div className='w-11/12 mx-auto'>
                <div className='text-center'>
                    <p className='banner_h text-xl font-semibold text-white'>Tours </p>
                    <h2 className='font-bold text-4xl mb-2 text-white'>Featured Tours</h2>
                </div>
                <div className='mt-12'>
                   <FeaturedSlider tours={tours}></FeaturedSlider>
                </div>
            </div>
        </div>
    );
};

export default Featured;
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Link } from 'react-router-dom';

const All_Destination = () => {
    const [all_destinations, setAll_destinations] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/all_destinations')
        .then(res => res.json())
        .then(data => setAll_destinations(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto my-12 py-10'>
            <div>
                <SectionTitle heading="All Destinations" subheading = "Best Destinations for Spending Your Time"></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    all_destinations.map(ds => <div key={ds._id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={ds['front-image']} className='h-[400px] w-full'/></figure>
                    <div className="card-body">
                      <Link to={`/oneDestination/${ds._id}`}><h2 className="card-title">{ds.name}</h2></Link>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default All_Destination;
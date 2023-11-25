import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import DestinationSlider from './DestinationSlider';

const Top_Destination = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/top_destinations')
        .then(res => res.json())
        .then(data => setDestinations(data))

    }, [])
    return (
        <div className='w-10/12 mx-auto py-20'>
            <div>
                <SectionTitle heading="Destination" subheading="Top Destination"></SectionTitle>
                
            </div>
            <div className='mt-12'>
                <DestinationSlider destinations = {destinations}></DestinationSlider>
            </div>
        </div>
    );
};

export default Top_Destination;
import React from 'react';
import Banner from '../Banner/Banner';
import bgImage from '../../../assets/travel.jpg';

const Destination = () => {
    return (
        <div>
            <Banner image={bgImage} dir="Home / " subdir = "Destination"></Banner>
            
        </div>
    );
};

export default Destination;
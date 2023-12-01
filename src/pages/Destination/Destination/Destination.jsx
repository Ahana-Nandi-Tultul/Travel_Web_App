import React from 'react';
import Banner from '../Banner/Banner';
import bgImage from '../../../assets/travel.jpg';
import All_Destination from '../All_Destination/All_Destination';

const Destination = () => {
    return (
        <div>
            <Banner image={bgImage} dir="Home / " subdir = "Destination" title="Destination"></Banner>
            <All_Destination></All_Destination>
        </div>
    );
};

export default Destination;
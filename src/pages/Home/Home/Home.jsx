import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Top_Destination from '../Top_Destination/Top_Destination';
import Featured from '../Featured/Featured';
import Ready_Travel from '../Ready_Travel/Ready_Travel';
import Travel_Guide from '../Travel_Guide/Travel_Guide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Contact></Contact>
            <Top_Destination></Top_Destination>
            <Featured></Featured>
            <Ready_Travel></Ready_Travel>
            <Travel_Guide></Travel_Guide>
        </div>
    );
};

export default Home;
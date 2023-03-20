import React from 'react';
import AvailableCompany from '../Available Brands/AvailableBrands';
import Banner from '../Banner/Banner/Banner';
import Items from '../Items/Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <AvailableCompany />
        </div>
    );
};

export default Home;
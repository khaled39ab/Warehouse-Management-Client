import React from 'react';
import AvailableCompany from '../Available Brands/AvailableBrands';
import Banner from '../Banner/Banner/Banner';
import BuyingInfo from '../Buying Info/BuyingInfo';
import Items from '../Items/Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <AvailableCompany />
            <BuyingInfo />
        </div>
    );
};

export default Home;
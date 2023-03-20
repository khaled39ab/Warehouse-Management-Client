import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandItems = () => {
    const brand = useLoaderData()
    console.log(brand);
    return (
        <div>
            
        </div>
    );
};

export default BrandItems;
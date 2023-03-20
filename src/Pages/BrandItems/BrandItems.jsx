import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BrandItem from './BrandItem';

const BrandItems = () => {

    const items = useLoaderData()

    return (
        <div>
            {
                items && items.map(item => <BrandItem
                    key={item._id}
                    item={item}
                ></BrandItem>)
            }
        </div>
    );
};

export default BrandItems;
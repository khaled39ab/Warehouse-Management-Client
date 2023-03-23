import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandItem from './BrandItem';

const BrandItems = () => {

    const items = useLoaderData()

    return (
        <div className='m-10 text-white'>
            <h1 className='text-4xl font-bold text-center'>Selected Brand Collection: {items.length} Items</h1>
            <div className='text-center my-10'>
                {
                    items.length < 1 && <div data-theme="synthwave" disabled className="text-xl font-bold btn text-white">Oops!! Here have no Collection</div>
                }
            </div>
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
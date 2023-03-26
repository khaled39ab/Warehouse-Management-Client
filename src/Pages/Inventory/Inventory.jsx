import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Item from '../Home/Items/Item/Item';

const Inventory = () => {
    const { data } = useFetch('https://warehouse-management-server-six.vercel.app/items');

    return (
        <div className='my-10 mx-8 p-5 rounded-lg' data-theme="autumn">
            <h1 className='text-4xl font-bold mb-10 text-center'>Choose Your <span className='text-rose-400'>Dream </span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-5'>
                {
                    data.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Inventory;
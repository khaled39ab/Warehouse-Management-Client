import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch/useFetch';
import Item from '../Item/Item';

const Items = () => {
    const { data } = useFetch('http://localhost:4000/items');
    

    if (data.length > 6) {
        data.length = 6
    };


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
            {
                data.length > 5 &&
                <div className='text-center'>
                    <Link to={'/inventory'}>
                        <button className="btn btn-outline">Show All</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Items;
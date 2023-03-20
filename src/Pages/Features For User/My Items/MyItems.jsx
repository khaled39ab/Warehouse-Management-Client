import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import MyItem from './My Item/MyItem';

const MyItems = () => {
    const { user } = useContext(AuthContext);

    const [myList, setMyList] = useState([]);

    useEffect(() => {
        const uri = `http://localhost:4000/items?provider_email=${user.email}`
        fetch(uri)
            .then(res => res.json())
            .then(data => setMyList(data))
    }, [user.email]);


    return (
        <div data-theme="bumblebee">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className="btn btn-circle" disabled>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>
                            <th className='text-lg font-bold'>Name & Model</th>
                            <th className='text-lg font-bold'>Provider</th>
                            <th className='text-lg font-bold'>Color</th>
                            <th className='text-lg font-bold'>Price</th>
                            <th className='text-lg font-bold'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myList && myList.map(list => <MyItem
                                key={list._id}
                                list={list}
                            ></MyItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;
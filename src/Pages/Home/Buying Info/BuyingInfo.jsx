import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const BuyingInfo = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/buying-info')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);


    return (
        <div className='my-10 mx-8 p-5 rounded-lg' data-theme="corporate">
            <div className=' mb-8 text-center'>
                <h1 className='text-4xl font-bold mb-3'>How to Touch Your <span className='text-rose-400'>Dream </span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5'>
                {
                    info && info.map(inf => <InfoCard
                        key={inf._id}
                        inf={inf}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default BuyingInfo;
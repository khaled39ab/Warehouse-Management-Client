import React from 'react';
import useFetch from '../../../hooks/useFetch/useFetch';
import InfoCard from './InfoCard';

const BuyingInfo = () => {

    const { data } = useFetch('https://warehouse-management-server-six.vercel.app/buying-info');


    return (
        <div className='my-10 mx-8 p-5 rounded-lg' data-theme="corporate">
            <div className=' mb-8 text-center'>
                <h1 className='text-4xl font-bold mb-3'>How to Touch Your <span className='text-rose-400'>Dream? </span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5'>
                {
                    data && data.map(info => <InfoCard
                        key={info._id}
                        info={info}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default BuyingInfo;
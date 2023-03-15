import React from 'react';

const Company = ({ logo }) => {
    return (
        <div className="card w-36 bg-base-200">
            <div className='w-full'>
            <img src={logo.logo} alt="logo" className="px-3 py-2 w-full" />
            </div>
            <div className="items-center text-center pb-1">
                <h2 className='tracking-wider'>{logo.name}</h2>
            </div>
        </div>
    );
};

export default Company;
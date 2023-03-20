import React from 'react';
import { useNavigate } from 'react-router-dom';

const Company = ({ logos }) => {
    const navigate = useNavigate();

    const handleCompany = (name) => {
        navigate(`/brand-items/${name}`)
    }


    return (
        <div onClick={() => handleCompany(logos.name)} className="card w-36 bg-base-200 cursor-pointer">
            <div className='w-full'>
                <img src={logos.logo} alt="logo" className="px-3 py-2 w-full" />
            </div>
            <div className="items-center text-center pb-1">
                <h2 className='tracking-wider'>{logos.name}</h2>
            </div>
        </div>
    );
};

export default Company;
import React from 'react';

const InfoCard = ({ inf }) => {
    const { title, step, img, description } = inf;

    return (
        <div className="card w-72 bg-gray-100 shadow-xl">
            <h1 className='text-center text-yellow-500 text-2xl font-bold mt-5'>{step}</h1>
            <figure className="px-10 pt-10">
                <img src={img} alt="info" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
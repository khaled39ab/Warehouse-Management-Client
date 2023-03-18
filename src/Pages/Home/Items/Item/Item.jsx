import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, company_name, car_model, model_year, car_price, provider_name, provider_email, photo_url, description } = item;


    return (
        <div className="card w-60 md:w-72 lg:w-96 bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={photo_url} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-800">{`${company_name} ${car_model} ${model_year}`}</h2>

                <p className='text-justify text-blue-600'>{description}</p>
                <p className='text-yellow-600'>Provider: {`${provider_name} (${provider_email})`}</p>

                <div className="card-actions justify-between">
                    <h2 className="card-title text-purple-500 mt-3"><span className='font-extrabold'>৳ </span>{car_price}</h2>
                    <Link to={`/itemDetails/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
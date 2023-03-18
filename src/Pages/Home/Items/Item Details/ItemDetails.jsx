import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const item = useLoaderData();

    const { _id, company_name, car_model, car_color, model_year, car_price, quantity, photo_url, car_vin, description } = item;
    console.log(item);

    return (
        <div className='m-20 rounded-2xl ' data-theme="cupcake">
            <div className="card card-side bg-green-100 shadow-xl">
                <div className='m-10 rounded-xl'>
                    <figure><img className='' src={photo_url} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-3xl text-indigo-900 uppercase">{`${company_name} ${car_model} ${model_year}`}</h2>
                    <p className='text-rose-500'>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
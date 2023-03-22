import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetails = () => {
    const item = useLoaderData();

    const { _id, company_name, car_model, car_color, model_year, car_price, quantity, provider_name, provider_email, photo_url, car_vin, description } = item;

    const navigate = useNavigate()


    const handleDelivered = () => {
        const delivered = { quantity: quantity - 1 };

        fetch(`http://localhost:4000/delivered/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(delivered)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast(`Successfully Delivered ${company_name} ${car_model} ${model_year}`);
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='m-20 rounded-2xl' data-theme="cupcake">
            <div className="card md:card-side bg-green-100 shadow-xl">
                <div className='md:m-10 rounded-xl'>
                    <figure><img src={photo_url} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold md:text-xl sm:text-lg lg:font-extrabold lg:text-3xl text-purple-600 uppercase">{`${company_name} ${car_model} ${model_year}`}</h2>

                    <div className='flex justify-start text-orange-400 md:font-semibold lg:font-bold md:text-lg uppercase'>
                        <h3 className="lg:mr-5">Version: {model_year}</h3>
                        <h3 className="lg:ms-5"> COLOR: {car_color}</h3>
                    </div>

                    <div>
                        <h3 className='text-rose-600 md:font-semibold lg:font-bold lg:text-xl'>Price: {car_price} <span className='font-extrabold text-xl'>৳</span></h3>

                        <p className='text-amber-900 md:font-semibold lg:font-bold lg:text-lg lg:my-3'>Vehicle Identification Number: {car_vin}</p>

                        <p className=' text-indigo-900 mb-3 whitespace-pre-line'> <span className='text-red-500'>Description:</span> {` 
                        " ${description} "`}</p>

                    </div>
                    <div className='md:font-semibold lg:font-bold lg:text-xl border-2 text-center border-teal-600 flex justify-evenly py-2 bg-white'>
                        <h3 className='text-rose-600 '>Available: {quantity}</h3>
                        {
                            quantity > 0 ?
                                <button title='Want to deliver?' onClick={handleDelivered} className="btn btn-sm btn-outline btn-success">Delivered</button> :
                                <button className="btn btn-sm btn-disabled" >Stock Out</button>
                        }
                    </div>

                    <div className="card-actions justify-between">
                        <div>
                            <h2 className='text-lg text-rose-500 '>Provider: <span className='text-indigo-700 hover:underline cursor-pointer'>{provider_name}</span></h2>
                            <h2 className='text-lg text-rose-500'>Email: <span className='text-indigo-700'>{provider_email}</span></h2>
                        </div>
                        <Link to={`/item/${_id}`}>
                            <button className="btn btn-warning rounded-2xl px-6 text-white font-semibold tracking-wider hover:bg-red-400" >Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const UpdateItem = () => {
    const { user } = useContext(AuthContext);
    const [updateInfo, setUpdateInfo] = useState({});
    const item = useLoaderData();

    const { _id, company_name, car_model, car_color, model_year, car_price, quantity, photo_url, car_vin, description } = item;

    const getUpdateInfo = e => {
        setUpdateInfo({
            ...updateInfo,
            [e.target.name]: e.target.value
        })
    };

    const handleUpdate = e => {
        e.preventDefault();

        const itemDetails = {
            ...updateInfo,
            provider_name: user.displayName,
            provider_email: user.email
        };

        fetch(`http://localhost:4000/updateItem/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className='bg-slate-400 m-8' data-theme="autumn">
            <h1 className='text-center text-4xl text-yellow-300 pt-10 font-bold'>Update For ID:{_id}</h1>
            <form onSubmit={handleUpdate} className=' py-14 px-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 rounded-md'>

                    <input defaultValue={user?.displayName} name='provider_name' type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly onChange={getUpdateInfo} />

                    <input defaultValue={user?.email} name='provider_email' type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly onChange={getUpdateInfo} />

                    <input type="text" defaultValue={company_name} name='company_name' placeholder="Car Company Name" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={car_model} name='car_model' placeholder="Car Model" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={car_color} name='car_color' placeholder="Car Color" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={model_year} name='model_year' placeholder="Car Model Year" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={car_vin} name='car_vin' placeholder="Car Vehicle Identification Number (VIN)" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={car_price} name='car_price' placeholder="Car Price" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="text" defaultValue={photo_url} name='photo_url' placeholder="Car Photo URL" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                    <input type="number" defaultValue={quantity} name='quantity' placeholder="Car Quantity" className="input input-bordered w-full" required onChange={getUpdateInfo} />

                </div>

                <textarea name='description' defaultValue={description} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full mt-5" required onChange={getUpdateInfo}></textarea>

                <button type='submit' className="btn btn-block mt-7 tracking-wide bg-rose-500 font-bold hover:bg-rose-700">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;
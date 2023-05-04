import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AddItem = () => {

    const { user } = useContext(AuthContext);

    const [itemInfo, setItemInfo] = useState({});

    const navigate = useNavigate();

    const getItemInfo = e => {
        setItemInfo({
            ...itemInfo,
            [e.target.name]: e.target.value
        })
    };

    const handleAddItem = e => {
        e.preventDefault();

        const itemDetails = {
            ...itemInfo,
            provider_name: user.displayName,
            provider_email: user.email
        };

        fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                authorization: `Bearer ${localStorage.getItem('warehouse-token')}`
            },
            body: JSON.stringify(itemDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Successfully Added Your Item");
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='m-10 rounded-3xl' data-theme="autumn">
            <form onSubmit={handleAddItem} className='bg-slate-400 py-14 px-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 rounded-md'>

                    <input defaultValue={user?.displayName} name='provider_name' type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly onChange={getItemInfo} />

                    <input defaultValue={user?.email} name='provider_email' type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly onChange={getItemInfo} />

                    <input type="text" name='company_name' placeholder="Car Company Name" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='car_model' placeholder="Car Model" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='car_color' placeholder="Car Color" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='model_year' placeholder="Car Model Year" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='car_vin' placeholder="Car Vehicle Identification Number (VIN)" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='car_price' placeholder="Car Price" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="text" name='photo_url' placeholder="Car Photo URL" className="input input-bordered w-full" required onChange={getItemInfo} />

                    <input type="number" name='quantity' placeholder="Car Quantity" className="input input-bordered w-full" required onChange={getItemInfo} />

                </div>

                <textarea name='description' placeholder="Description" className="textarea textarea-bordered textarea-lg w-full mt-5" required onChange={getItemInfo}></textarea>

                <button type='submit' className="btn btn-block mt-7 tracking-wide bg-rose-500 font-bold hover:bg-rose-700">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AddItem = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='m-10 rounded-3xl' data-theme="autumn">
            <form className='bg-slate-400 py-14 px-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 rounded-md'>

                    <input defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly />

                    <input defaultValue={user?.email} type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly />

                    <input type="text" placeholder="Car Company Name" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Model" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Color" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Model Year" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Vehicle Identification Number (VIN)" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Price" className="input input-bordered w-full" required />

                    <input type="text" placeholder="Car Photo URL" className="input input-bordered w-full" required />

                    <input type="number" placeholder="Car Quantity" className="input input-bordered w-full" required />

                </div>

                <button type='submit' className="btn btn-block mt-7 tracking-wide bg-rose-500 font-bold hover:bg-rose-700">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
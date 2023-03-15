import React from 'react';

const AddItem = () => {
    return (
        <div className='m-10'>
            <form onSubmit={''} className='bg-base-200 py-14 px-10 rounded-md'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 '>
                    <input defaultValue={''} type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly />

                    <input defaultValue={''} type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly />

                    <input type="text" placeholder="Car Company Name" className="input input-bordered w-full" />

                    <input type="text" placeholder="Car Model" className="input input-bordered w-full" />

                    <input type="text" placeholder="Car Color" className="input input-bordered w-full" />

                    <input type="text" placeholder="Car Model Year" className="input input-bordered w-full" />

                    <input type="text" placeholder="Car Vehicle Identification Number (VIN)" className="input input-bordered w-full" />

                    <input type="text" placeholder="Car Price" className="input input-bordered w-full" />

                    <input type="number" placeholder="Car Quantity" className="input input-bordered w-full" required />
            
                </div>

                <button type='submit' className="btn btn-block mt-7 bg-[#ff3811]">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
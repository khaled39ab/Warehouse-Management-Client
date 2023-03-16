import React from 'react';

const Item = ({ item }) => {
    const { Company_Name, Car_Model, Model_Year, Car_Price, Supplier_Name, Supplier_Email, Photo_URL, Description } = item;

    console.log(item);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Photo_URL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-800">{`${Company_Name } ${Car_Model} ${Model_Year}`}</h2>
                <p className='text-justify text-blue-600'>{Description}</p>
                <small className='text-yellow-600'>Supplier: {`${Supplier_Name} (${Supplier_Email})`}</small>
                <div className="card-actions justify-between">
                    <h2 className="card-title text-purple-500 mt-3"><span className='font-extrabold'>৳ </span>{Car_Price}</h2>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
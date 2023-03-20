import React from 'react';

const MyItem = ({list}) => {
    
    const { _id, company_name, car_model, car_color, model_year, car_price, quantity, provider_name, provider_email, photo_url, car_vin } = list;


    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-16">
                            <img src={photo_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-bold">{company_name} {car_model} {model_year}</div>
                        <div className="text-sm opacity-50">VIN: {car_vin}</div>
                    </div>
                </div>
            </td>
            <td>
                {provider_name}
                <br />
                <span className="badge badge-ghost">{provider_email}</span>
            </td>
            <td className="text-lg">{car_color}</td>
            <th>
                <div className="text-lg font-bold">{car_price}</div>
            </th>
            <th>
                <div className="text-lg font-bold">{quantity}</div>
            </th>
        </tr>
    );
};

export default MyItem;
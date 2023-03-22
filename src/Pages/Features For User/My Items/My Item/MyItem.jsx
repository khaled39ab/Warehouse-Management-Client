import React from 'react';
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyItem = ({ list }) => {
    const navigate = useNavigate();

    const { _id, company_name, car_model, car_color, model_year, car_price, quantity, provider_name, provider_email, photo_url, car_vin } = list;

    const handleDelete = id => {
        confirmAlert({
            title: "Auto Car Confirmation box",
            message: "Are You Sure to Delete",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        fetch(`http://localhost:4000/item/${id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    toast(`You Delete ${company_name} ${car_model}`)
                                    navigate('/')
                                }
                            })
                    }
                },
                {
                    label: "No"
                    // onClick: () => alert("Click No")
                }
            ]
        });
    };


    return (
        <tr className="hover">
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-10 lg:w-24 lg:h-20">
                            <img src={photo_url} alt="Car" />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-semibold lg:text-lg lg:font-bold">{company_name} {car_model} {model_year}</div>
                        <div className="text-sm opacity-50">VIN: {car_vin}</div>
                    </div>
                </div>
            </td>
            <td>
                {provider_name}
                <br />
                <span className="text-sm lg:text-base lg:px-2 lg:py-1 badge badge-ghost">{provider_email}</span>
            </td>
            <td className="text-sm lg:text-lg">{car_color}</td>
            <th>
                <div className="text-sm font-semibold lg:text-lg lg:font-bold">{car_price}</div>
            </th>
            <th>
                <div className="text-sm font-semibold lg:text-lg lg:font-bold">{quantity}</div>
            </th>
        </tr>
    );
};

export default MyItem;
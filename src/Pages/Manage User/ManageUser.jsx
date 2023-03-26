import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const ManageUser = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className='mx-auto w-2/3 my-20 rounded-xl' data-theme="retro">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={user?.photoURL} alt="User img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">User Name: {user?.displayName}</h2>
                    <h2 className="card-title">User Email: {user?.email}</h2>
                    <p>Email Verified: {user?.emailVerified ? "Verified" : "Not Verified"}</p>
                    <h2 className="card-title mt-5">Quick Link</h2>
                    <div className="card-actions justify-between">
                        <Link to={'/inventory'}>
                            <button className="btn btn-primary">Inventory</button>
                        </Link>
                        <Link to={'/add-item'}>
                            <button className="btn btn-primary">Add Item</button>
                        </Link>
                        <Link to={'/my-items'}>
                            <button className="btn btn-primary">My Items</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
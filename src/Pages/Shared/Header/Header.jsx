import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/icons/car-care-logo.png';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const name = (user?.displayName)?.split(' ')[0];
    const img = user?.photoURL;

    const handleSignOut = () => {
        logOut();
    }

    return (
        <div className="navbar bg-base-200" data-theme="aqua">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/store'}>Store</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        {/* <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li> */}
                        <li><Link to={'/about'}>About us</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" />
                    <span>AutoCare</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/store'}>Store</Link></li>
                    <li><Link to={'/blogs'}>Blogs</Link></li>
                    {/* <li tabIndex={0}>
                        <Link>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to={'/about'}>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="btn btn-outline rounded-btn">
                                <img className='h-8 rounded-full mr-2' src={img} alt="" />
                                {name}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-1 font-bold">
                                {/* <li><Link to={'/orders'}>Orders</Link></li> */}
                                <li><button onClick={handleSignOut} className="btn  btn-secondary">Log Out</button></li>
                            </ul>
                        </div>
                        :
                        <Link to={'/signIn'} className="btn btn-outline btn-secondary">Sign In </Link>
                }
            </div>
        </div>
    );
};

export default Header;
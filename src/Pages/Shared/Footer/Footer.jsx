import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import logo from '../../../asset/icons/car-care-logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content" data-theme="night">
            <ToastContainer />
            <div>
                <img src={logo} alt="logo" />
                <p>Automotive Car Care Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to={'/'} className="link link-hover">Home</Link>
                <Link to={'/inventory'} className="link link-hover">Inventory</Link>
                <Link to={'/my-items'} className="link link-hover">My Items</Link>
                <Link to={'/add-item'} className="link link-hover">Add Item</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to={'/about'} className="link link-hover">About us</Link>
                <Link to={'/contact'} className="link link-hover">Contact</Link>
                <Link to={'/blogs'} className="link link-hover">Blogs</Link>
                <Link to={'/'} className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
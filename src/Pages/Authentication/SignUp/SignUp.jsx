import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
    const { createUser, addUserName } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');


    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;

        console.log({ phone });

        createUser(email, password)
            .then(res => {
                // console.log(res.user);
                addUserName(name)
                    .then(() => {
                        toast("Check your email and verify it.")
                    })

                navigate('/')
            })
            .catch(err => {
                setError(err.message);
            })
    };


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" data-theme="aqua">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Please Sign Up
                </h1>
                <form className="mt-6" onSubmit={handleSignUp}>
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="name"
                            name='name'
                            required
                            placeholder='Enter Your Name'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            required
                            placeholder='Enter Your Email'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            required
                            placeholder='Enter Password'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {
                        error && <div className='text-red-500'>({error.split('/')[1]}</div>
                    }
                    <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            name='phone'
                            required
                            placeholder='Enter Your Phone Number'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                    </div>
                </form>
                <SocialSignIn />
                <p className="mt-8 text-xs font-semibold text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to={'/signIn'} className="font-bold text-purple-600 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
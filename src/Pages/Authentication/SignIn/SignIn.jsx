import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignIn = () => {
    const { passwordLogin, passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [emailId, setEmailId] = useState('');

    const handleSignIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        passwordLogin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => setError(err.message))
    };

    const handlePasswordReset = () => {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
            passwordReset(emailId);
            toast("Password Reset successfully. Check Your Email.");
        }
    };


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" data-theme="aqua">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Please Sign in
                </h1>
                <form className="mt-6" onSubmit={handleSignIn}>
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
                            onBlur={e => setEmailId(e.target.value)}
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
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    {
                        error && <div className='text-red-500'>({error.split('/')[1]}</div>
                    }

                    <div
                        onClick={handlePasswordReset}
                        className="text-xs text-purple-600 cursor-pointer hover:underline" >
                        Forget Password?
                    </div>

                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign In
                        </button>
                    </div>
                </form>

                <SocialSignIn />

                <p className="mt-8 text-xs font-semibold text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to={'/signUp'} className="font-bold text-purple-600 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
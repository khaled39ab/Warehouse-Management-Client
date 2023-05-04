import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const addUserName = (name, phone) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: phone
        })
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }


    const passwordLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const googleAuth = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    const githubAuth = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    };


    const twitterAuth = () => {
        setIsLoading(true);
        return signInWithPopup(auth, twitterProvider);
    };


    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };


    const getJWTToken = user => {
        const currentUser = {
            email: user.email
        };

        fetch('https://warehouse-management-server-six.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('warehouse-token', data.token)
            });
    }


    const logOut = () => {
        localStorage.removeItem('warehouse-token');
        return signOut(auth)
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsLoading(false);
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);


    const AuthInfo = {
        createUser,
        addUserName,
        passwordLogin,
        googleAuth,
        githubAuth,
        verifyEmail,
        twitterAuth,
        passwordReset,
        logOut,
        user,
        isLoading,
        getJWTToken
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;

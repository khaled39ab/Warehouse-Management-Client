import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
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
        return signInWithEmailAndPassword(auth, email, password);
    };


    const googleAuth = () => {
        return signInWithPopup(auth, googleProvider);
    };


    const githubAuth = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const twitterAuth = () => {
        return signInWithPopup(auth, twitterProvider);
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
        user
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;

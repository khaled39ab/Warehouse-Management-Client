import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const addUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };

    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleAuth = () =>{
        return signInWithPopup(auth, googleProvider);
    }



    const AuthInfo = {
        createUser,
        addUserName,
        passwordLogin,
        googleAuth,
        
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;

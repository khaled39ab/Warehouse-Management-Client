import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();


const UserContext = ({ children }) => {

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

    const AuthInfo = {
        createUser,
        addUserName,
        passwordLogin
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;

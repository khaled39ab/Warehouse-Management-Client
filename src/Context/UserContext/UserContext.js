import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();


const UserContext = ({children}) => {
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const addUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };

    const AuthInfo = {
        createUser,
        addUserName
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;

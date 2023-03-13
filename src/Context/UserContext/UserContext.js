import { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const AuthInfo = {
        createUser
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;

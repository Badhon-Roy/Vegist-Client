import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth ,provider)
    }



    const userInfo = {
        user,
        loading,
        createUser,
        googleAuth
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
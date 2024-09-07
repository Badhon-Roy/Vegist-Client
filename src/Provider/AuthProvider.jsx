import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,googleProvider)
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
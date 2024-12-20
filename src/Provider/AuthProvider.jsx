import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
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
    
    const signIn = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email , password)
    }

    const googleAuth = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photoURL)=>{
        setLoading(true)
        return updateProfile (auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , createUser =>{
            setUser(createUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])



    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleAuth,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
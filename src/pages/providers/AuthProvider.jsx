import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebse.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect } from 'react';

export const AuthContext = createContext(null)
const auth =  getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const careteUser =(email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser =(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("from onauthstate change",loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const logout = () => {
        setLoading(true);
        signOut(auth)
    }

    const authInfo = {
        user,
        careteUser,
        loginUser,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
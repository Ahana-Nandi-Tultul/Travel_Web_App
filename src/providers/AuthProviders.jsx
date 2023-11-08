import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                const loggedUser = {email: currentUser?.email};
                    fetch('http://localhost:3000/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(loggedUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('travily-access-token', data?.token);
                        setLoading(false);
                        setUser(currentUser);
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
                setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = () => {
        // setLoading(true);
        return signOut(auth);

    }

    const updateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name})
    }


    const authInfo = {
        user, 
        loading,
        createUser,
        login,
        googleLogin,
        updateUserProfile,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
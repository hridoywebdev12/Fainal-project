import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
//   import app from "../firebase/firebase.init";
import app from '../firebase/firebase.config';

export const UserContext = createContext();

const auth = getAuth(app);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        // console.log("user ovserbing runging", user);
    });
    const logOut = () => {
        return signOut(auth);
    };
    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    };
    useEffect(() => {
        return () => unsubscribe();
    }, []);
    const contextValue = {
        createUser,
        logIn,
        user,
        logOut,
        updateUserName,
    };
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;
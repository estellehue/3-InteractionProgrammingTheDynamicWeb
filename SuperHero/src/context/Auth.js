import React, { useEffect, useState } from 'react';
import fire from '../util/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged(setCurrentUser);

        return unsubscribe
    }, []);

    return(
        <AuthContext.Provider
        value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    );
};
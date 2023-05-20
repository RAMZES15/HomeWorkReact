import { useState, useEffect, createContext } from "react";
import { Routes } from '../../route';

export const AuthContext = createContext();

export const admin = {
    name: 'BOSS',
    password: '12345'
}

export const App = () => {
    const [userStatus, setUserStatus] = useState(false);

    useEffect(() => {
        const savedUserStatus = localStorage.getItem('userStatus');
        if (savedUserStatus) {
            setUserStatus(JSON.parse(savedUserStatus));
        }
    }, []);

    const handleLogin = () => {
        setUserStatus(true);
        localStorage.setItem('userStatus', JSON.stringify(true));
    };

    const handleLogout = () => {
        setUserStatus(false);
        localStorage.setItem('userStatus', JSON.stringify(false));
    };

    return (
        <>
            <AuthContext.Provider value={{ handleLogout, handleLogin, userStatus }}>
                <Routes />
            </AuthContext.Provider>
        </>
    )
}
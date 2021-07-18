import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { API_URL, NEXT_URL } from 'config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    //Register
    const register = async (user) => {
        console.log(user)
    }
    //Login
    const Login = async ({ email: identifier, password }) => {
        // console.log(identifier, password)
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            setUser(data.user);
            console.log(data);
        } else {
            setError(data.message);
            setError(null);
        }
    }
    //Logout
    const Logout = async () => {
        console.log('Logout')
    }

    //Check if user is logged in
    const checkedUserLoggedIn = async (user) => {
        console.log('Check')
    }
    return (
        <AuthContext.Provider value={{
            user, error, register, Login, Logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;
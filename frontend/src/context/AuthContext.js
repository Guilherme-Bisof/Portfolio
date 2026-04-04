"use client";

import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ao carregar o app, tenta pegar o token do localStorage
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            //
            //
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
                email, password,
            });
            const { token } = response.data;
            setToken(token);
            localStorage.setItem('token', token); // Guarda o token no navegador
            return true; // Sucesso
        } catch (error) {
            console.error('Erro no login:', error);
            return false; // Falha
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token'); // Remove o token do navegador
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook customizado para facilitar o uso
export const useAuth = () => {
    return useContext(AuthContext);
};
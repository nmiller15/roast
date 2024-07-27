// AuthContext.js
import React, { createContext, useState } from 'react';
import users from '../mocks/users';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
      const userRecord = users.find((user) => user.username === userData.username);
      if (!userRecord) return;
      if (userRecord.password === userData.password) {
        setIsLoggedIn(true);
        setUser(userData);
      }
    };

    const createAccount = (userData) => {
      users.push(userData);
      setIsLoggedIn(true);
      setUser(userData);
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, createAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
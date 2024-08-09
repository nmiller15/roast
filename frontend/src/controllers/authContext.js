// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import users from '../mocks/users';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  //TODO: Create a useLocalStorage hook
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const saved = localStorage.getItem('isLoggedIn');
      const initialValue = JSON.parse(saved)
      return initialValue || false
    });
    const [user, setUser] = useState(() => {
      const saved = localStorage.getItem('user');
      const initialValue = JSON.parse(saved);
      return initialValue || { roasts: [] }
    });

    const login = async (userData) => {
      // Mock login logic
      // const userRecord = users.find((user) => user.username === userData.username);
      // if (!userRecord) return;
      // if (userRecord.password === userData.password) {
      //   setIsLoggedIn(true);
      //   setUser(userRecord);
      // }
      console.log(process.env);
      const loginResponse = await fetch(`${process.env.REACT_APP_API_URI}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
        credentials: 'include'
      })
      if (!loginResponse.ok) return;
      const jsonResponse = await loginResponse.json()
      setIsLoggedIn(true)
      setUser(prev => {
        return {
          ...prev,
          id: jsonResponse.id,
          firstName: jsonResponse.firstName,
          lastName: jsonResponse.lastName,
          email: jsonResponse.email,
          username: jsonResponse.username,
          isAdmin: jsonResponse.isAdmin,
          createdAt: jsonResponse.createdAt
        }
      });
      // Get user roasts when logging in:
      const roastsResponse = await fetch(`${process.env.REACT_APP_API_URI}/roasts?username=${jsonResponse.username}`, {
        method: 'GET',
        credentials: "include"
      })
      if (!roastsResponse.ok) return;
      const roastsJson = await roastsResponse.json();
      setUser(prev => {
        return {
          ...prev,
          roasts: roastsJson,
        }
      })
    };

    const getUserRoasts = async (user) => {
      if (!user.username) return;
      const roastsResponse = await fetch(`${process.env.REACT_APP_API_URI}/roasts?username=${user.username}`, {
        method: 'GET',
        credentials: "include"
      })
      if (!roastsResponse.ok) return;
      const roastsJson = await roastsResponse.json();
      setUser(prev => {
        return {
          ...prev,
          roasts: roastsJson,
        }
      })
    }

    const createAccount = async (userData) => {
      const body = JSON.stringify({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        username: userData.username
      })
      const response = await fetch(`${process.env.REACT_APP_API_URI}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body,
      })
      if (!response) return;
      login({ username: userData.username, password: userData.password})
    }

    const logout = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/user/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      if (!response) return;
      setIsLoggedIn(false);
      setUser({ roasts: [] });
    };

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [user, isLoggedIn])

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, createAccount, getUserRoasts }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };

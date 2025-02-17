import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client'
import { IconoirProvider } from 'iconoir-react';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './controllers/authContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider 
        router={router}
        fallbackElement={(
            <div><p>Loading...</p></div>
        )}
      >
        <IconoirProvider
          iconProps={{
            color: '#FFF8F4'
          }}>
          <App />
        </IconoirProvider>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

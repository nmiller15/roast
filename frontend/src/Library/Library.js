import React, { useContext } from 'react'
import './Library.css';
import CardList from '../components/CardList';
import { AuthContext } from '../controllers/authContext';

function Library() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div className="Library Page">
        <h1>Library</h1>
        { isLoggedIn ? <CardList roasts={user.roasts} /> 
          : <p>When you have roasts, they will appear here.</p>
        }
    </div>
  )
}

export default Library
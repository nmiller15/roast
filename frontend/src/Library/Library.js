import React, { useContext, useEffect, useState } from 'react'
import './Library.css';
import CardList from '../components/CardList';
import { AuthContext } from '../controllers/authContext';

function Library() {
  const { isLoggedIn, user, getUserRoasts } = useContext(AuthContext);
  const [roasts, setRoasts] = useState(user.roasts)

  useEffect(() => {
    const updateRoasts = async () => {
      const roasts = await getUserRoasts(user);
      setRoasts(roasts);

    }
  }, [])

  return (
    <div className="Library Page">
        <h1>Library</h1>
        { isLoggedIn || roasts ? <CardList roasts={roasts} /> 
          : <p>When you have roasts, they will appear here.</p>
        }
    </div>
  )
}

export default Library
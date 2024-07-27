import React, { useContext } from "react";
import CardList from "../components/CardList";
import { ProfileCircle, Settings } from "iconoir-react";
import { AuthContext } from "../controllers/authContext";

export function AccountLoggedIn({ roasts }) {
  const {user} = useContext(AuthContext)

  return ( 
    <>
      <div className="account-info">
        <ProfileCircle />
        { user.firstName && user.lastName 
            ? <h2>{user.firstName} {user.lastName}</h2>
        : user.username 
            ? <h2>{user.username}</h2>
        : <h2>Welcome!</h2>
        }
        <p className="subtitle">{user.email}</p>
      </div>
      <div className="roasts">
        <h2>Favorite Roasts</h2>
        { user.roasts && <CardList roasts={user.roasts} favoritesList={true} />}
      </div>
    </>
  )
}
  
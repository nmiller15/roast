import React from "react";
import CardList from "../components/CardList";
import { ProfileCircle, Settings } from "iconoir-react";

export function AccountLoggedIn({ roasts }) {

  return ( 
    <>
      <div className="account-info">
        <ProfileCircle />
        <h2>Nolan Miller</h2>
        <p className="subtitle">mail@nolanmiller.me</p>
      </div>
      <div className="roasts">
        <h2>Favorite Roasts</h2>
        <CardList roasts={roasts} favoritesList={true} />
      </div>
    </>
  )
}
  
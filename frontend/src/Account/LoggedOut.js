import React, { useContext, useState } from "react";
import { AuthContext } from "../controllers/authContext";
import Button from "../components/Button";
import { ProfileCircle } from "iconoir-react";
import './Account.css'
import '../index.css'

export function LoggedOut({ handleSelectLogin, handleSelectCreate }) {

  return (
    <div className="logged-out">
      <div className="account-info">
        <ProfileCircle />
        <h2>Logged Out</h2>
        <p className="subtitle"> </p>
      </div>
      <div className="buttons">
        <Button callback={handleSelectLogin} color="var(--blue)" text="Login"/>
        <Button callback={handleSelectCreate} color="var(--orange" text="Create an Account" />
      </div>
    </div>
  );
}
  
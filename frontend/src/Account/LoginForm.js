import React from "react";
import Button from "../components/Button";
export function LoginForm({ userInfo, setUserInfo, handleSubmit }) {

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="LoginForm">
      <div className="input-wrapper">
        <input type="text" name="username" id="username" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="username">Username</label>
      </div>
      <div className="input-wrapper">
        <input type="password" name="password" id="password" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="password">Password</label>
      </div>
      <Button color='var(--light-blue' text='Login' callback={handleSubmit}/>
    </div>
    );
}
  
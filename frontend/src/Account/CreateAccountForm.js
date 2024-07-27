import React from "react";
import '../components/Card.css'
import './Account.css'
import Button from "../components/Button";

export function CreateAccountForm({ userInfo, setUserInfo, handleSubmit }) {

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="CreateAccountForm Card">
      <h2>Create An Account</h2>
      <div className="input-wrapper">
        <input type="text" name="firstName" id="first-name" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="firstName">First Name</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="lastName" id="last-name" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="lastName">Last Name</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="email" id="email" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="email">Email</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="username" id="username" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="username">Username</label>
      </div>
      <div className="input-wrapper">
        <input type="password" name="password" id="password" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="password">Password</label>
      </div>
      <div className="input-wrapper">
        <input type="password" name="repass" id="repass" className="input-field" placeholder="placeholder" onChange={handleChange} /><br />
        <label className="input-label" htmlFor="repass">Re-Type Password</label>
      </div>
      <Button color='var(--light-orange' text='Submit' callback={handleSubmit} />
    </div>
  );
}
  
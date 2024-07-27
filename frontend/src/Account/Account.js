import { LoginForm } from './LoginForm';
import { CreateAccountForm } from './CreateAccountForm';
import { LoggedOut } from './LoggedOut';
import { AccountLoggedIn } from './AccountLoggedIn';
import React, { useContext, useState } from 'react'
import './Account.css'
import { Settings, ProfileCircle } from 'iconoir-react'
import CardList from '../components/CardList';
import roasts from '../mocks/roasts';
import users from '../mocks/users';
import { AuthContext } from '../controllers/authContext';

function Account() {
  const { isLoggedIn, login, logout, createAccount } = useContext(AuthContext);
  const [ loginForm, setLoginForm ] = useState(null);
  const [ userInfo, setUserInfo] = useState({});

  const handleSelectCreate = () => {
    setLoginForm('create');
  }

  const handleSelectLogin = () => {
    setLoginForm('login')
  }

  const handleSubmit = () => {
    if (loginForm === 'create') {
      createAccount(userInfo);
    } else if (loginForm === 'login') {
      login(userInfo);
    }  
    setLoginForm(null);
    setUserInfo({});
  }

  return (
    <div className="Account Page">
      <div className="title-bar">
        <h1>Account</h1>
        <Settings onClick={() => logout()} />
      </div>
      {
        isLoggedIn && !loginForm ? <AccountLoggedIn roasts={roasts} />
        : loginForm === 'create' ? <CreateAccountForm userInfo={userInfo} setUserInfo={setUserInfo} handleSubmit={handleSubmit}/>
        : loginForm === 'login' ? <LoginForm userInfo={userInfo} setUserInfo={setUserInfo} handleSubmit={handleSubmit}/>
        : <LoggedOut handleSelectLogin={handleSelectLogin} handleSelectCreate={handleSelectCreate} />
      }
    </div>
  )
}

export default Account
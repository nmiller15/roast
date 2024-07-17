import React from 'react'
import './Account.css'
import { Settings, ProfileCircle } from 'iconoir-react'
import Card from '../components/Card';
import CardList from '../components/CardList';
import roasts from '../mocks/roasts';

// TODO: UI Differences for login states
// TODO: Utility function to get the favorite roasts entry point.

function Account() {
  return (
    <div className="Account Page">
      <div className="title-bar">
        <h1>Account</h1>
        <Settings />
      </div>
      <div className="account-info">
        <ProfileCircle />
        <h2>Nolan Miller</h2>
        <p className="subtitle">mail@nolanmiller.me</p>
      </div>
      <div className="roasts">
        <h2>Favorite Roasts</h2>
        <CardList roasts={roasts} />
      </div>
    </div>

  )
}

export default Account
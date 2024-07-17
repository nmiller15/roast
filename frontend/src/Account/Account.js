import React from 'react'
import './Account.css'
import { Settings, ProfileCircle } from 'iconoir-react'
import Card from '../components/Card';

const roastSample = {
  name: "Ethiopian Yirgacheffe",
  dateRoasted: new Date('July 22, 2024'),
  percentLoss: 15.6,
  isFavorite: true
}

function Account() {
  return (
    <div className="Account">
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
        <Card roast={roastSample} />
      </div>
    </div>

  )
}

export default Account
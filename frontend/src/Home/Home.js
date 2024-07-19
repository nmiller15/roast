import React from 'react'
import './Home.css'
import { HeatingSquare } from 'iconoir-react'
import Button from '../components/Button'
import CardList from '../components/CardList'
import roasts from '../mocks/roasts'
import '../components/Card.css'
import { useState } from 'react'
import Roaster from '../Roaster/Roaster'
import { Roast } from '../mocks/roasts';

function Home() {
  const [roastActive, setRoastActive] = useState(false);
  const newRoast = new Roast(Date.now());

  const handleNewRoast = () => {
    setRoastActive(true)
  }

  const closeRoaster = () => {
    console.log('closing')
    setRoastActive(false);
  }

  return !roastActive 
  ? 
   (
    <div className="Home Page">
      <div className="center-title">
        <HeatingSquare />
        <h1>Roast</h1>
        <p className="subtitle">Know your home roasts.</p>
      </div>
      <div className="lower-section">
        <Button 
          color="var(--blue)" 
          text="Start a new roast"
          callback={handleNewRoast} />
        <h3>Previous Roast</h3>
        <CardList roasts={[roasts[0]]} />
      </div>
    </div>
   )
  :
   (
    <Roaster roast={newRoast} close={closeRoaster}/>
   )

}

export default Home
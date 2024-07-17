import React from 'react'
import './Home.css'
import { HeatingSquare } from 'iconoir-react'
import Button from '../components/Button'
import CardList from '../components/CardList'
import roasts from '../mocks/roasts'

function Home() {
  return (
    <div className="Home">
      <div className="center-title">
        <HeatingSquare />
        <h1>Roast</h1>
        <p className="subtitle">Know your home roasts.</p>
      </div>
      <div className="lower-section">
        <Button color="var(--blue)" text="Start a new roast" />
        <h3>Previous Roast</h3>
        <CardList roasts={[roasts[0]]} />
      </div>
    </div>
  )
}

export default Home
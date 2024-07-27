import React, { useContext } from 'react'
import './Home.css'
import { HeatingSquare } from 'iconoir-react'
import Button from '../components/Button'
import CardList from '../components/CardList'
import '../components/Card.css'
import { useState } from 'react'
import Roaster from '../Roaster/Roaster'
import { Roast } from '../mocks/roasts';
import { currentRoast } from '../signals'
import { AuthContext } from '../controllers/authContext'

function Home() {
  const [roastActive, setRoastActive] = useState(false);
  const [roastProgress, setRoastProgress] = useState();
  const [roastStep, setRoastStep] = useState(null);
  const { isLoggedIn, user } = useContext(AuthContext);

  const handleNewRoast = () => {
    setRoastActive(true);
    setRoastProgress("start-roast-form")
    setRoastStep(1);
    currentRoast.value = new Roast(Date.now());
  }

  const closeRoaster = () => {
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
        { isLoggedIn || user.roasts ? 
          <>
            <h3>Previous Roast</h3>
            <CardList roasts={[user.roasts[user.roasts.length - 1]]} />
          </> : <></>
      }
      </div>
    </div>
   )
  :
   (
    <div className="Page roaster-active">
      <h1>Roast coffee</h1>
      <Roaster currentRoast={currentRoast} close={closeRoaster} progress={roastProgress} setProgress={setRoastProgress} roastStep={roastStep} setRoastStep={setRoastStep}/>
      <div className="lower-section">
      { isLoggedIn || user.roasts ? <>
        { roastProgress === 'roast-active' || roastProgress === 'finish-roast-form' ?
          <>
            <h3>Previous Roast</h3>
            <CardList roasts={[user.roasts[user.roasts.length - 1]]} roastStep={roastStep} roastProgress={roastProgress}/>
          </>
          :
          <></>
        }</>
        :<></>
    }
      </div>
    </div>
   )

}

export default Home
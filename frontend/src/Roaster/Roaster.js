import { StartRoast } from './StartRoast';
import React from 'react'
import './Roaster.css'
import { useState, useEffect } from 'react'
import '../components/Card.css'
import Button from '../components/Button'
import NewRoastForm from './NewRoastForm'
import Timer from './Timer'
import { useTimer } from 'use-timer'
import Status from './Status'
import NoSleep from 'nosleep.js';
import FinishRoastForm from './FinishRoastForm'
import RoastDetails from '../components/RoastDetails'
import { saveRoast } from '../controllers/homeController'

function Roaster({ currentRoast, close, progress, setProgress }) {
  const [roastStep, setRoastStep] = useState(1);
  const { time, start, pause, reset, status} = useTimer();
  const noSleep = new NoSleep();
  
  // Move through the different roaster states
  const nextProgress = () => {
    setProgress(progress === 'start-roast-form'
      ? 'roast-active'
      : progress === 'roast-active'
      ? 'finish-roast-form'
      : progress === 'finish-roast-form'
      ? 'roast-complete'
      : progress === 'roast-complete'
      ? 'inactive'
      : 'inactive')
  }

  // Log the roast timing
  const logTime = () => {
    let key = '';
    if (roastStep === 1) key = 'firstCrackSeconds'
    if (roastStep === 2) key = 'tempRiseSeconds'
    if (roastStep === 3) key = 'openedLidSeconds'
    if (roastStep === 4) key = 'heatOffSeconds'
    if (roastStep === 5) key = 'dumpedSeconds'
    currentRoast.value[key] = time
  }
  
  // Control steps during the roasting
  const nextStep = () => {
    if (roastStep < 5) {
      setRoastStep(roastStep + 1);
    } else {
      nextProgress();
      pause();
      noSleep.disable();
    }
  }

  // Moves to next step and logs the time
  const handleRecordStep = () => {
    logTime();
    nextStep();
  }

  const handleSave = () => {
    saveRoast();
    nextProgress();
  }
  
  // Trigger rerender of the Home Page component
  useEffect(() => {
    if (progress === 'start-roast-form') {
      start();
      noSleep.enable();
    }
    if (progress === 'inactive') {
      close();
    }
  }, [close, progress, noSleep, start])


  return progress === 'start-roast-form' ? <StartRoast currentRoast={currentRoast} nextProgress={nextProgress}  /> 
    : progress === 'roast-active' ?
    (
      <div className="Card roast">
        <div className="roaster-header">
          <Timer time={time} />
        </div>
        <hr />
        <div className="roaster-body">
          <Status currentRoast={currentRoast} step={roastStep} />
        </div>
        <hr/>
        <div className="roast-button">
          <Button 
            text="Record Step"
            color="var(--blue)"
            callback={handleRecordStep}
          />
        </div>  
        <Button 
          text="Skip Step"
          color="var(--light-blue)"
          callback={nextStep}
        />
        
      </div>
    )
    : progress === 'finish-roast-form' ?
    (
      <div className="Card roast">
        <div className="roaster-header">
          <Timer time={time} />
        </div>
        <hr/>
        <div className="roaster-body">
          <h2>Almost done!</h2>
          <p>Let your coffee cool until it has mostly stopped smoking, then weigh your beans and log the weight below.</p>
          <FinishRoastForm currentRoast={currentRoast} />
        </div>
        <Button 
          text="See Roast Details"
          color="var(--light-blue)"
          callback={nextProgress}
        />
      </div>
    )
    : progress === 'roast-complete' ?
    (
      <div className="Card roast">
        <div className="roaster-header">
          <h2>Roast Complete!</h2>
        </div>
        <hr/>
        <div className="roaster-body">
          <h2>{currentRoast.value.name ? currentRoast.value.name : `${currentRoast.value.origin} ${currentRoast.value.variety}`}</h2>
        </div>
        <RoastDetails roast={currentRoast.value} />
        <div className="finish-buttons">
          <Button 
            text="Discard"
            color="var(--light-blue"
            callback={nextProgress}
          />
          <Button 
            text="Save"
            color="var(--blue)"
            callback={handleSave}
          />
        </div>
      </div>
    )
    : <></>
  }

  export default Roaster;
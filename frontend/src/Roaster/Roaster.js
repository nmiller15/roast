import React from 'react'
import './Roaster.css'
import { useState, useEffect } from 'react'
import '../components/Card.css'
import Button from '../components/Button'
import NewRoastForm from './NewRoastForm'
import Timer from './Timer'
import { useTimer } from 'use-timer'
import Status from './Status'

function Roaster({ roast, setRoast, close }) {
  const [progress, setProgress] = useState("start-roast-form");
  // start-roast-form > roast-active > finish-roast-form > roast-complete
  const [roastStep, setRoastStep] = useState(1);
  // steps are 1-5

  // Set up timer
  const { time, start, pause, reset, status} = useTimer();
  
  // Move through the different roaster states
  const nextProgress = () => {
    // if (progress === 'start-roast-form') document.initialForm.submit();
    setProgress(progress === 'start-roast-form'
      ? 'roast-active'
      : progress === 'roast-active'
      ? 'finish-roast-form'
      : progress === 'finish-roast-form'
      ? 'roast-complete'
      : progress === 'roast-complete'
      ? 'inactive'
      : 'inactive' 
    )
    if (progress === 'start-roast-form') start()
  }

  // Log the roast timing
  const logTime = () => {
    let key = '';
    if (roastStep === 1) key = 'firstCrackSeconds'
    if (roastStep === 2) key = 'tempRiseSeconds'
    if (roastStep === 3) key = 'openedLidSeconds'
    if (roastStep === 4) key = 'heatOffSeconds'
    if (roastStep === 5) key = 'dumpedSeconds'
    setRoast(prev => ({
      ...prev,
      [key]: time
    }))
  }
  
  // Control steps during the roasting
  const nextStep = () => {
    if (roastStep < 5) {
      setRoastStep(roastStep + 1);
    } else {
      nextProgress();
      pause();
    }
  }

  // Moves to next step and logs the time
  const handleRecordStep = () => {
    logTime();
    nextStep();
  }
  
  // Trigger rerender of the Home Page component
  useEffect(() => {
    if (progress === 'inactive') {
      close();
    }
  })

  return progress === 'start-roast-form' ?
    (
      <div className="Card roast">
        <div className="roaster-header">
          <h2>Start a new roast</h2>
        </div>
        <hr />
        <div className="roaster-body">
          <p className="no-bottom-margin">Weigh your unroasted beans, and add the rest of the information for your home roast.</p>
          <NewRoastForm roast={roast} setRoast={setRoast} />
          <h3>Heat your roaster</h3>
          <p>Don't start your roast until your beans are ready to go in the roaster!</p>
        </div>
        <Button 
          text="Start Roast"
          color="var(--light-blue)"
          callback={nextProgress}/>
      </div>
    ) 
    : progress === 'roast-active' ?
    (
      <div className="Card roast">
        <div className="roaster-header">
          <Timer time={time} />
        </div>
        <hr />
        <div className="roaster-body">
          <Status roast={roast} step={roastStep} />
          <Button 
            text="Record Step"
            color="var(--light-blue)"
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
        <Button 
          text="Discard"
          color="var(--light-blue"
          callback={nextProgress}
        />
        <Button 
          text="Save"
          color="var(--light-blue"
          callback={nextProgress}
        />
      </div>
    )
    : <></>
}

export default Roaster
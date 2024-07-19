import React from 'react'
import './Roaster.css'
import { useState, useEffect } from 'react'
import '../components/Card.css'
import Button from '../components/Button'

function Roast({ roast, close }) {
  const [progress, setProgress] = useState("start-roast-form");
  // start-roast-form > roast-active > finish-roast-form > roast-complete
  const [roastStep, setRoastStep] = useState(1);
  // steps are 1-5
  
  const nextProgress = () => {
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
  }
  
  const nextStep = () => {
    if (roastStep < 5) {
      setRoastStep(roastStep + 1);
    } else {
      nextProgress();
    }
  }
  
  // Trigger rerender of the Home Page component
  useEffect(() => {
    if (progress === 'inactive') {
      close();
    }
  })
  // Card split into head body and foot
  // height is different in start state
  // body and foot can be the same in the roast and finish state
  // start roast form > new component
  // Buttons:
    // Start roast > change state to roast
    // record step > record time, change state to next step
    // skip step > don't record time, change state to next step
    // see roast details
    // Discard -> back to home and close the state
    // Save -> construct object and send to db
  // Timer component: keeps track of seconds and outputs a readable time
  // Componentize the roast card to use in the final details card

  return progress === 'start-roast-form' ?
    (
      <div className="Card roast">
        <Button 
          text="Start Roast"
          color="var(--light-blue)"
          callback={nextProgress}/>
      </div>
    ) 
    : progress === 'roast-active' ?
    (
      <div className="Card roast">
        <Button 
          text="Record Step"
          color="var(--light-blue)"
          callback={nextStep}
        />
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

export default Roast
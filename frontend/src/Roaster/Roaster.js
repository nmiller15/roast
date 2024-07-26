import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'
import './Roaster.css'
import '../components/Card.css'
import { RoastComplete } from './RoastComplete';
import { FinishRoast } from './FinishRoast';
import { RoastCoffee } from './RoastCoffee';
import { StartRoast } from './StartRoast';
import { useTimer } from 'use-timer'
import NoSleep from 'nosleep.js';
import { saveRoast, logTime } from '../controllers/roasterController'

function Roaster({ currentRoast, close, progress, setProgress }) {
  const [roastStep, setRoastStep] = useState(1);
  const { time, start, pause } = useTimer();
  const noSleep = useMemo(() => new NoSleep(), []);

  
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
    logTime(roastStep, time);
    nextStep();
  }

  const handleSave = () => {
    saveRoast();
    nextProgress();
  }
  
  // Trigger rerender of the Home Page component
  useEffect(() => {
    if (progress === 'roast-active') {
      start();
      noSleep.enable();
    }
    if (progress === 'inactive') {
      close();
    }
  }, [close, progress, start, noSleep])


  return progress === 'start-roast-form' ? <StartRoast currentRoast={currentRoast} nextProgress={nextProgress}  /> 
    : progress === 'roast-active' ? <RoastCoffee time={time} currentRoast={currentRoast} roastStep={roastStep} handleRecordStep={handleRecordStep} nextStep={nextStep}  />
    : progress === 'finish-roast-form' ? <FinishRoast time={time} currentRoast={currentRoast} nextProgress={nextProgress}  />
    : progress === 'roast-complete' ? <RoastComplete   nextProgress={nextProgress} handleSave={handleSave}  />
    : <></>
  }

  export default Roaster;
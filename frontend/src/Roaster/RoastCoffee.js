import React from "react";
import Status from "./Status";
import { Timer } from "iconoir-react";
import Button from "../components/Button";
import './Roaster.css'
export function RoastCoffee({
  time,
  currentRoast,
  roastStep,
  handleRecordStep,
  nextStep
}) {
  return <div className="Card roast">
        <div className="roaster-header">
          <Timer time={time} />
        </div>
        <hr />
        <div className="roaster-body">
          <Status currentRoast={currentRoast} step={roastStep} />
        </div>
        <hr />
        <div className="roast-button">
          <Button text="Record Step" color="var(--blue)" callback={handleRecordStep} />
        </div>  
        <Button text="Skip Step" color="var(--light-blue)" callback={nextStep} />
        
      </div>;
}
  
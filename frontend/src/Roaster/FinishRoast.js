import React from "react";
import './Roaster.css'
import FinishRoastForm from "./FinishRoastForm";
import Button from "../components/Button";
import Timer from './Timer'
export function FinishRoast({
  time,
  currentRoast,
  nextProgress
}) {
  return <div className="Card roast">
        <div className="roaster-header">
          <Timer time={time} />
        </div>
        <hr />
        <div className="roaster-body">
          <h2>Almost done!</h2>
          <p>Let your coffee cool until it has mostly stopped smoking, then weigh your beans and log the weight below.</p>
          <FinishRoastForm currentRoast={currentRoast} />
        </div>
        <Button text="See Roast Details" color="var(--light-blue)" callback={nextProgress} />
      </div>;
}
  
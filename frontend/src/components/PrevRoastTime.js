import React from "react";
import timeString from "../util/timeString";

export function PrevRoastTime({ cardRoast, roastStep }) {
  return ( 
    <div className="step-details">
      <h4>Step {roastStep}</h4>
      <p>{timeString(roastStep === 1 ? cardRoast.firstCrackSeconds 
                   : roastStep === 2 ? cardRoast.tempRiseSeconds
                   : roastStep === 3 ? cardRoast.openedLidSeconds
                   : roastStep === 4 ? cardRoast.heatOffSeconds
                   : roastStep === 5 ? cardRoast.dumpedSeconds 
                   : <></>)}
      </p>
    </div>
  );
}
  
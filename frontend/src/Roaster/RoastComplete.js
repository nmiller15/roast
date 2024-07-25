import React from "react";
import './Roaster.css'
import { currentRoast } from "../signals";
import RoastDetails from "../components/RoastDetails";
import Button from "../components/Button";
export function RoastComplete({
  nextProgress,
  handleSave
}) {
  return <div className="Card roast">
        <div className="roaster-header">
          <h2>Roast Complete!</h2>
        </div>
        <hr />
        <div className="roaster-body">
          <h2>{currentRoast.value.name ? currentRoast.value.name : `${currentRoast.value.origin} ${currentRoast.value.variety}`}</h2>
        </div>
        <RoastDetails roast={currentRoast.value} />
        <div className="finish-buttons">
          <Button text="Discard" color="var(--light-blue" callback={nextProgress} />
          <Button text="Save" color="var(--blue)" callback={handleSave} />
        </div>
      </div>;
}
  
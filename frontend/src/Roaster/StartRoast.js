import React from "react";
import NewRoastForm from "./NewRoastForm";
import Button from "../components/Button";
export function StartRoast({
  currentRoast,
  nextProgress
}) {
  return <div className="Card roast">
        <div className="roaster-header">
          <h2>Start a new roast</h2>
        </div>
        <hr />
        <div className="roaster-body">
          <p className="no-bottom-margin">Weigh your unroasted beans, and add the rest of the information for your home roast.</p>
          <NewRoastForm currentRoast={currentRoast} />
          <h3>Heat your roaster</h3>
          <p>Don't start your roast until your beans are ready to go in the roaster!</p>
        </div>
        <Button text="Start Roast" color="var(--light-blue)" callback={nextProgress} />
      </div>;
}
  
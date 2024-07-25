import React from 'react'

function FinishRoastForm({ currentRoast }) {

  const handleChange = (e) => {
    currentRoast.value[e.target.name] = e.target.value
  }

  return (
    <div className="FinishRoastForm">
      <form method="post" action="" name="initialForm">
        <div className="input-wrapper">
          <input type="text" name="lowestTempF" id="lowest-temp" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
          <label class="input-label" for="lowest-temp">Lowest temperature (°F)</label>
        </div>
        <div className="input-wrapper">
          <input type="text" name="endingWeightG" id="end-weight" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
          <label class="input-label" for="variety">Final weight (g)</label>
        </div>
      </form>
    </div>
  )
}

export default FinishRoastForm
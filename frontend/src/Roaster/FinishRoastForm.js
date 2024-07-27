import React from 'react'

function FinishRoastForm({ currentRoast }) {

  const handleChange = (e) => {
    currentRoast.value[e.target.name] = e.target.value
  }

  return (
    <div className="FinishRoastForm">
      <form method="post" action="" name="initialForm">
        <div className="input-wrapper">
          <input type="text" name="lowestTempF" id="lowest-temp" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
          <label className="input-label" htmlFor="lowest-temp">Lowest temperature (°F)</label>
        </div>
        <div className="input-wrapper">
          <input type="text" name="endingWeightG" id="end-weight" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
          <label className="input-label" htmlFor="variety">Final weight (g)</label>
        </div>
      </form>
    </div>
  )
}

export default FinishRoastForm
import React from 'react'

function NewRoastForm({currentRoast}) {
  
  const handleChange = (e) => {
    currentRoast.value[e.target.name] = e.target.value
  }
  
  return (
    <form method="post" action="" name="initialForm">
      <div className="input-wrapper">
        <input type="text" name="origin" id="origin" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label className="input-label" htmlFor="origin">Origin</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="variety" id="variety" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label className="input-label" htmlFor="variety">Variety</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="name" id="name" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label className="input-label" htmlFor="name">Roast Name (Optional)</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startingWeightG" id="starting-weight" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label className="input-label" htmlFor="starting-weight">Starting Weight (g)</label>
      </div>
      <div className="inline-input-wrapper">
        <label className="input-label" htmlFor="stove-heat-level">Stove Heat Level</label>
        <select name="heatLevel" id="stove-heat-level" className="input-field" onChange={handleChange}>
          <option id='lo' value="Low">Low</option>
          <option id='medlo' value="MedLow">Medium Low</option>
          <option id='med' value="Med">Medium</option>
          <option id='medhi' value="MedHi">Medium High</option>
          <option id='hi' value="Hi">High</option>
        </select><br/>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startTempF" id="starting-temp" className="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label className="input-label" htmlFor="starting-temp">Starting Temperature (°F)</label>
      </div>

    </form>
  )
}

export default NewRoastForm
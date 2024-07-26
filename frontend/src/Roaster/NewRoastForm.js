import React from 'react'

function NewRoastForm({currentRoast}) {
  
  const handleChange = (e) => {
    currentRoast.value[e.target.name] = e.target.value
  }
  
  return (
    <form method="post" action="" name="initialForm">
      <div className="input-wrapper">
        <input type="text" name="origin" id="origin" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label class="input-label" for="origin">Origin</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="variety" id="variety" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label class="input-label" for="variety">Variety</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="name" id="name" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label class="input-label" for="name">Roast Name (Optional)</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startingWeightG" id="starting-weight" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label class="input-label" for="starting-weight">Starting Weight (g)</label>
      </div>
      <div className="inline-input-wrapper">
        <label class="input-label" for="stove-heat-level">Stove Heat Level</label>
        <select name="heatLevel" id="stove-heat-level" class="input-field" onChange={handleChange}>
          <option id='lo' value="Low">Low</option>
          <option id='medlo' value="MedLow">Medium Low</option>
          <option id='med' value="Med">Medium</option>
          <option id='medhi' value="MedHi">Medium High</option>
          <option id='hi' value="Hi">High</option>
        </select><br/>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startTempF" id="starting-temp" class="input-field" placeholder="placeholder" onChange={handleChange}/><br/>
        <label class="input-label" for="starting-temp">Starting Temperature (°F)</label>
      </div>

    </form>
  )
}

export default NewRoastForm
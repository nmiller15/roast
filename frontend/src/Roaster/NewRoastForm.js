import React from 'react'

function NewRoastForm() {
  return (
    <form method="post" action="" name="initialForm">
        <div className="input-wrapper">
        <input type="text" name="origin" id="origin" class="input-field" placeholder="placeholder"/><br/>
        <label class="input-label" for="origin">Origin</label>
        </div>
      <div className="input-wrapper">
        <input type="text" name="variety" id="variety" class="input-field" placeholder="placeholder"/><br/>
        <label class="input-label" for="variety">Variety</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="name" id="name" class="input-field" placeholder="placeholder"/><br/>
        <label class="input-label" for="name">Roast Name (Optional)</label>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startingWeightG" id="starting-weight" class="input-field" placeholder="placeholder"/><br/>
        <label class="input-label" for="starting-weight">Starting Weight (g)</label>
      </div>
      <div className="inline-input-wrapper">
        <label class="input-label" for="stove-heat-level">Stove Heat Level</label>
        <select name="heatLevel" id="stove-heat-level" class="input-field" >
          <option value="Low">Low</option>
          <option value="MedLow" key="">Medium Low</option>
          <option value="Med" key="">Medium</option>
          <option value="MedHi" key="">Medium High</option>
          <option value="Hi" key="">High</option>
        </select><br/>
      </div>
      <div className="input-wrapper">
        <input type="text" name="startingTempF" id="starting-temp" class="input-field" placeholder="placeholder"/><br/>
        <label class="input-label" for="starting-temp">Starting Temperature (°F)</label>
      </div>

    </form>
  )
}

export default NewRoastForm
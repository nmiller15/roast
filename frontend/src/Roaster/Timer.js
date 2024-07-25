import React from 'react'
import './Roaster';
import timeString from '../util/timeString'

function Timer({ time }) {

  return (
    <div className="Timer">
      <p>{timeString(time, "colon")}</p>
    </div>
  )
}

export default Timer
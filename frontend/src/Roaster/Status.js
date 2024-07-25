import React from 'react'
import timeString from '../util/timeString'

function Status({ currentRoast, step }) {
  return (
    <div className="Status">
      <div className={step === 1 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>1</p></div>
          <p>First crack</p>
        </div>
        <p className="time">
          { currentRoast.value.firstCrackSeconds ? timeString(currentRoast.value.firstCrackSeconds) : '-'}
        </p>
      </div>
      <div className={step === 2 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>2</p></div>
          <p>Temperature rise</p>
        </div>
        <p className="time">
        { currentRoast.value.tempRiseSeconds ? timeString(currentRoast.value.tempRiseSeconds) : '-'}
        </p>
      </div>
      <div className={step === 3 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>3</p></div>
          <p>Opened lid</p>
        </div>
        <p className="time">
        { currentRoast.value.openedLidSeconds ? timeString(currentRoast.value.openedLidSeconds) : '-'}
        </p>
      </div>
      <div className={step === 4 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>4</p></div>
          <p>Turned off heat</p>
        </div>
        <p className="time">
        { currentRoast.value.heatOffSeconds ? timeString(currentRoast.value.heatOffSeconds) : '-'}
        </p>
      </div>
      <div className={step === 5 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>5</p></div>
          <p>Dumped beans</p>
        </div>
        <p className="time">
        { currentRoast.value.dumpedSeconds ? timeString(currentRoast.value.dumpedSeconds) : '-'}
        </p>
      </div>
    </div>
  )
}

export default Status
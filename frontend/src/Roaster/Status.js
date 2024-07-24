import React from 'react'
import timeString from '../util/timeString'

function Status({ roast, step }) {
  return (
    <div className="Status">
      <div className={step === 1 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>1</p></div>
          <p>First crack</p>
        </div>
        <p className="time">
          { roast.firstCrackSeconds ? timeString(roast.firstCrackSeconds) : '-'}
        </p>
      </div>
      <div className={step === 2 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>2</p></div>
          <p>Temperature rise</p>
        </div>
        <p className="time">
        { roast.tempRiseSeconds ? timeString(roast.tempRiseSeconds) : '-'}
        </p>
      </div>
      <div className={step === 3 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>3</p></div>
          <p>Opened lid</p>
        </div>
        <p className="time">
        { roast.openedLidSeconds ? timeString(roast.openedLidSeconds) : '-'}
        </p>
      </div>
      <div className={step === 4 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>4</p></div>
          <p>Turned off heat</p>
        </div>
        <p className="time">
        { roast.heatOffSeconds ? timeString(roast.heatOffSeconds) : '-'}
        </p>
      </div>
      <div className={step === 5 ? "active row" : "row"}>
        <div className="step">
          <div className="number"><p>5</p></div>
          <p>Dumped beans</p>
        </div>
        <p className="time">
        { roast.dumpedSeconds ? timeString(roast.dumpedSeconds) : '-'}
        </p>
      </div>
    </div>
  )
}

export default Status
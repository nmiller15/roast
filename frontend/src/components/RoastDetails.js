import React from 'react'
import './Card.css';
import percentLossCalc from '../util/percentLossCalc';
import timeString from '../util/timeString';
import roastString from '../util/roastString';
import gToOz from '../util/gToOz';
import dateFormat from 'dateformat';
import Rating from './Rating';
import { currentRoast } from '../signals';

function RoastDetails({ roast, setRoast }) {
  const {
    dateRoasted,
    rating,
    startingWeightG,
    endingWeightG,
    heatLevel,
    startTempF,
    lowestTempF,
    firstCrackSeconds,
    tempRiseSeconds,
    openedLidSeconds,
    heatOffSeconds,
    dumpedSeconds,
  } = roast;

  const percentLoss = percentLossCalc(roast);
  const firstCrack = timeString(firstCrackSeconds);
  const tempRise = timeString(tempRiseSeconds)
  const openedLid = timeString(openedLidSeconds);
  const heatOff = timeString(heatOffSeconds);
  const dumped = timeString(dumpedSeconds);
  const startingOz = gToOz(startingWeightG);
  const roastedOz = gToOz(endingWeightG);
  
  return (
    <div className="RoastDetails">
      <div className="expanded-description">
          <Rating rating={rating} roast={roast} setRoast={setRoast}/>
          <p>Roasted on {dateFormat(dateRoasted, "mmmm d, yyyy")}</p>
          <p>{roastString(percentLoss)} ({percentLoss}%)</p>
          <p>{roastedOz} oz</p>
      </div>
      <div className="roast-details-expanded">
        <h3>Roast Details</h3>
        <table>
          <tbody>
            <tr>
            <td className="label">Starting weight:</td> 
            <td className="value left">{startingOz}oz</td>
            <td className="label right">Roasted weight:</td>
            <td className="value">{roastedOz}oz</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <table>
          <tbody>
            <tr>
                <td className="label">% weight lost:</td>
                <td className="value left">{percentLoss}%</td>
                <td className="label right">First crack:</td>
                <td className="value right">{firstCrack}</td>
            </tr>
            <tr>
                <td className="label">Heat level:</td>
                <td className="value left">{heatLevel}</td>
                <td className="label right">Temp Rise:</td>
                <td className="value right">{tempRise}</td>
            </tr>
            <tr>
                <td className="label">Max temp:</td>
                <td className="value left">{startTempF}°F</td>
                <td className="label right">Opened lid:</td>
                <td className="value right">{openedLid}</td>
            </tr>
            <tr>
                <td className="label">Min temp:</td>
                <td className="value left">{lowestTempF}°F</td>
                <td className="label right">Heat off:</td>
                <td className="value right">{heatOff}</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <table className="summary">
          <tbody>
            <tr>
                <td className="label final">Total roasting time:</td>
                <td className="value final">{dumped}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RoastDetails
import React from 'react'
import './Card.css';
import percentLossCalc from '../util/percentLossCalc';
import timeString from '../util/timeString';
import roastString from '../util/roastString';
import gToOz from '../util/gToOz';
import dateFormat from 'dateformat';
import Rating from './Rating';

function RoastDetails({ roast }) {

  const {
    id,
    dateRoasted,
    rating,
    origin,
    variety,
    name,
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
    notes
  } = roast;

  console.log(roast);

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
          <Rating rating={rating} />
          <p>Roasted on {dateFormat(dateRoasted, "mmmm d, yyyy")}</p>
          <p>{roastString(percentLoss)} ({percentLoss}%)</p>
          <p>{roastedOz} oz</p>
      </div>
      <div className="roast-details-expanded">
        <h3>Roast Details</h3>
        <table>
            <tr>
            <td class="label">Starting weight:</td> 
            <td class="value left">{startingOz}oz</td>
            <td class="label right">Roasted weight:</td>
            <td class="value">{roastedOz}oz</td>
            </tr>
        </table>
        <hr/>
        <table>
            <tr>
                <td class="label">% weight lost:</td>
                <td class="value left">{percentLoss}%</td>
                <td class="label right">First crack:</td>
                <td class="value right">{firstCrack}</td>
            </tr>
            <tr>
                <td class="label">Heat level:</td>
                <td class="value left">{heatLevel}</td>
                <td class="label right">Temp Rise:</td>
                <td class="value right">{tempRise}</td>
            </tr>
            <tr>
                <td class="label">Max temp:</td>
                <td class="value left">{startTempF}°F</td>
                <td class="label right">Opened lid:</td>
                <td class="value right">{openedLid}</td>
            </tr>
            <tr>
                <td class="label">Min temp:</td>
                <td class="value left">{lowestTempF}°F</td>
                <td class="label right">Heat off:</td>
                <td class="value right">{heatOff}</td>
            </tr>
        </table>
        <hr/>
        <table class="summary">
            <tr>
                <td class="label final">Total roasting time:</td>
                <td class="value final">{dumped}</td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default RoastDetails
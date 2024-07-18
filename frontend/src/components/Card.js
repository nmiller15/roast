import React from 'react'
import { useState, useEffect } from 'react';
import { Heart, HeartSolid, PlusCircle } from 'iconoir-react';
import dateFormat, { masks } from "dateformat";
import Button from './Button';
import roastCalc from '../util/roastCalc';
import roastString from '../util/roastString';
import percentLossCalc from '../util/percentLossCalc';
import timeString from '../util/timeString';
import gToOz from '../util/gToOz';
import './Card.css';

function Card({ roast }) {
    const [isActive, setIsActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(roast.isFavorite);
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

    const percentLoss = percentLossCalc(roast);
    const firstCrack = timeString(firstCrackSeconds);
    const tempRise = timeString(tempRiseSeconds)
    const openedLid = timeString(openedLidSeconds);
    const heatOff = timeString(heatOffSeconds);
    const dumped = timeString(dumpedSeconds);
    const startingOz = gToOz(startingWeightG);
    const roastedOz = gToOz(endingWeightG);

    // Change the state of isFavorite
    const handleHeartClick = (e) => {
        setIsFavorite(!isFavorite);
        //TODO: Add a logic function to add this card to the favorites list.
    }

    // Change the active state of a card
    const toggleIsActive = (e) => {
        setIsActive(!isActive);
    }

    useEffect(() => {

    }, [isActive]);

    return isActive
    ?  (
        <div className="Card collapsed">
            <div className="roast-details" onClick={toggleIsActive}>
                <h3>{name}</h3>
                <p>{dateFormat(dateRoasted, "mm/dd/yyyy")} - {roastCalc(percentLoss)} ({percentLoss}%)</p>
            </div>
            <div className="favorite-container" onClick={handleHeartClick}>
                { isFavorite 
                   ? <HeartSolid/>
                   : <Heart /> 
                }
            </div>
        </div>
    )
    : (
        <div className="expanded-card-container">
            <div className="Card expanded">
                    <div className="title-bar">
                        <h2>{name}</h2>
                        <div className="favorite-container" onClick={handleHeartClick}>
                            { isFavorite 
                                ? <HeartSolid />
                                : <Heart />
                            }
                        </div>
                    </div>
                    <hr/>
                    <div className="expanded-body">
                        <div className="expanded-description">
                            {/* TODO: Create a rating component, pass down rating and return stars with the right value */}
                            <p>Roasted on {dateFormat(dateRoasted, "mmmm, d, yyyy")}</p>
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
                        <div className="notes">
                        <div className="notes-head">
                            <h3>Notes</h3>
                            <PlusCircle />
                        </div>
                        <div className="notes-field">
                            <p>{notes}</p>
                        </div>
                        </div>
                    </div>

                    <Button 
                        color="var(--light-orange)" 
                        text="Close"
                        callback={toggleIsActive}
                    />
            </div>
        </div>
    )
}

export default Card
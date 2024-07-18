import React from 'react'
import { useState, useEffect } from 'react';
import { Heart, HeartSolid } from 'iconoir-react';
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
        openedLidSeconds,
        heatOffSeconds,
        notes
    } = roast;

    const percentLoss = percentLossCalc(roast);
    const firstCrack = timeString(firstCrackSeconds);
    const openedLid = timeString(openedLidSeconds);
    const heatOff = timeString(heatOffSeconds);

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
                    <div className="expanded-details">
                        {/* TODO: Create a rating component, pass down rating and return stars with the right value */}
                        <p>Roasted on {dateFormat(dateRoasted, "mmmm, d, yyyy")}</p>
                        <p>{roastString(percentLoss)} ({percentLoss}%)</p>

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
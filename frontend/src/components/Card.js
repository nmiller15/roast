import React from 'react'
import { useState } from 'react';
import { Heart, HeartSolid, PlusCircle } from 'iconoir-react';
import dateFormat, { masks } from "dateformat";
import Button from './Button';
import roastCalc from '../util/roastCalc';
import percentLossCalc from '../util/percentLossCalc';
import './Card.css';
import RoastDetails from './RoastDetails';

function Card({ roast }) {
    const [isActive, setIsActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(roast.isFavorite);
    const { dateRoasted, name, notes} = roast;

    const percentLoss = percentLossCalc(roast);

    // Change the state of isFavorite
    const handleHeartClick = (e) => {
        setIsFavorite(!isFavorite);
        //TODO: Add a logic function to add this card to the favorites list.
    }

    // Change the active state of a card
    const expand = (e) => {
        setIsActive(true);
    }

    const collapse = (e) => {
        setIsActive(false);
    }

    return !isActive
    ?  (
        <div className="Card collapsed">
            <div className="roast-details" onClick={expand}>
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
        <div className="full-screen-container">
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
                    <RoastDetails roast={roast} />
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
                    callback={collapse}
                />
            </div>
        </div>
    )
}

export default Card
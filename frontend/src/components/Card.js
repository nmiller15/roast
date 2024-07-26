import React from 'react'
import { useState } from 'react';
import { Heart, HeartSolid, PlusCircle } from 'iconoir-react';
import dateFormat from "dateformat";
import Button from './Button';
import roastCalc from '../util/roastCalc';
import percentLossCalc from '../util/percentLossCalc';
import './Card.css';
import RoastDetails from './RoastDetails';
import { updateRoast } from '../controllers/roasterController';
import { currentRoast } from '../signals';
import useDebounce from 'react-debounced';

function Card({ roast }) {
    const [isActive, setIsActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(roast.isFavorite);
    const { id, dateRoasted, name, origin, variety, notes } = roast;
    const debounce = useDebounce()

    const percentLoss = percentLossCalc(roast);

    // Change the state of isFavorite
    const handleHeartClick = (e) => {
        setIsFavorite(!isFavorite);
        roast.isFavorite = !roast.isFavorite;
        updateRoast(roast);
    }

    // Update the notes of the roast
    const handleNotesChange = (e) => {
        currentRoast.value.notes = e.target.value;
        debounce(() => {
            updateRoast(currentRoast);
        })
    }

    // Change the active state of a card
    const expand = (e) => {
        currentRoast.value = roast;
        setIsActive(true);
    }

    const collapse = (e) => {
        currentRoast.value = null;
        setIsActive(false);
    }

    return !isActive
    ?  (
        <div className="Card collapsed">
            <div className="roast-details" onClick={expand}>
                <h3>{name ? name : `${origin} ${variety}`}</h3>
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
                    <h2>{name ? name : `${origin} ${variety}`}</h2>
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
                            {/* <p>{notes}</p> */}
                            <textarea name="notes" cols="30" rows="10" onChange={handleNotesChange}>
                                {notes}
                            </textarea>
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
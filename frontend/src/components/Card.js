import { PrevRoastTime } from './PrevRoastTime';
import React from 'react'
import { useState } from 'react';
import { PlusCircle } from 'iconoir-react';
import dateFormat from "dateformat";
import Favorite from './Favorite';
import Button from './Button';
import roastCalc from '../util/roastCalc';
import percentLossCalc from '../util/percentLossCalc';
import './Card.css';
import RoastDetails from './RoastDetails';
import { updateRoast } from '../controllers/roasterController';
import useDebounce from 'react-debounced';

function Card({ roast, roastStep, roastProgress }) {
    const [isActive, setIsActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(roast.isFavorite);
    const [cardRoast, setCardRoast] = useState(roast);
    const { id, dateRoasted, name, origin, variety, notes } = cardRoast;
    const debounce = useDebounce()

    const percentLoss = percentLossCalc(roast);

    // Change the state of isFavorite
    const handleHeartClick = (e) => {
        setIsFavorite(!isFavorite);
        setCardRoast({
            ...cardRoast,
            isFavorite: !cardRoast.isFavorite
        })
        debounce(() => {
            updateRoast(cardRoast);
        })
    }

    // Update the notes of the roast
    const handleNotesChange = (e) => {
        setCardRoast({
            ...cardRoast,
            notes: e.target.value
        })
        debounce(() => {
            updateRoast(cardRoast);
        })
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
                <h3>{name ? name : `${origin} ${variety}`}</h3>
                <p>{dateFormat(dateRoasted, "mm/dd/yyyy")} - {roastCalc(percentLoss)} ({percentLoss}%)</p>
            </div>
            { !roastStep || roastProgress === 'finish-roast-form' ? <Favorite handleHeartClick={handleHeartClick} isFavorite={isFavorite}  /> 
                         : <PrevRoastTime cardRoast={cardRoast} roastStep={roastStep} />
            }
        </div>
    )
    : (
        <div className="full-screen-container">
            <div className="Card expanded">
                <div className="title-bar">
                    <h2>{name ? name : `${origin} ${variety}`}</h2>
                    <Favorite handleHeartClick={handleHeartClick} isFavorite={isFavorite}  />
                </div>
                <hr/>
                <div className="expanded-body">
                    <RoastDetails roast={roast} />
                    <div className="notes">
                        <div className="notes-head">
                            <h3>Notes</h3>
                            {/* <PlusCircle /> */}
                        </div>
                        <div className="notes-field">
                            {/* <p>{notes}</p> */}
                            <textarea name="notes" cols="30" rows="10" onChange={handleNotesChange} defaultValue={notes} />
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
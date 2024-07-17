import React from 'react'
import './Card.css';
import { Heart, HeartSolid } from 'iconoir-react';
import { useState, useEffect } from 'react';
import roastCalc from '../util/roastCalc';

function Card({ roast }) {
    const [isFavorite, setIsFavorite] = useState(roast.isFavorite);
    const { name, dateRoasted, percentLoss } = roast;
    const month = dateRoasted.getMonth()
    const day = dateRoasted.getDate()
    const year = dateRoasted.getYear();

    // Change the state of isFavorite
    const handleHeartClick = (e) => {
        setIsFavorite(!isFavorite);
        //TODO: Add a logic function to add this card to the favorites list.
    }

    return (
        <div className="Card">
            <div className="roast-details">
                <h3>{name}</h3>
                <p>{month + 1}/{day}/{year} - {roastCalc(percentLoss)} ({percentLoss}%)</p>
            </div>
            <div className="favorite-container" onClick={handleHeartClick}>
                { isFavorite 
                   ? <HeartSolid/>
                   : <Heart /> 
                }
            </div>
        </div>
    )
}

export default Card
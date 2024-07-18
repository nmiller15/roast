import React from 'react'
import { Star, StarSolid } from 'iconoir-react';
import { useState } from 'react';
import './Rating.css';


function Rating({ rating }) {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleClick = (n) => {
    if (currentRating === n) {
        setCurrentRating(0);
    } else {
        setCurrentRating(n);
    }
  }

  const handle1 = () => handleClick(1);
  const handle2 = () => handleClick(2);
  const handle3 = () => handleClick(3);
  const handle4 = () => handleClick(4);
  const handle5 = () => handleClick(5);

  return (
    <div class="rating">
        <div class="1" onClick={handle1}>
            { currentRating < 1 ? <Star /> : <StarSolid /> }
        </div>
        <div class="2" onClick={handle2}>
            { currentRating < 2 ? <Star /> : <StarSolid /> }
        </div>
        <div class="3" onClick={handle3}>
            { currentRating < 3 ? <Star /> : <StarSolid /> }
        </div>
        <div className="4" onClick={handle4}>
            { currentRating < 4 ? <Star /> : <StarSolid /> }
        </div>
        <div className="5" onClick={handle5}>
            { currentRating < 5 ? <Star /> : <StarSolid /> }
        </div>
    </div>
  )
}

export default Rating
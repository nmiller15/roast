import React from 'react'
import { Star, StarSolid } from 'iconoir-react';
import { useState } from 'react';
import './Rating.css';
import useDebounce from 'react-debounced';
import { updateRoast } from '../controllers/roasterController';
import { currentRoast } from '../signals';


function Rating({ rating }) {
  const [currentRating, setCurrentRating] = useState(currentRoast.value.rating);
  const debounce = useDebounce();

  const handleClick = (n) => {
    if (n !== currentRating) {
        currentRoast.value.rating = n
        setCurrentRating(n);
    } else {
        currentRoast.value.rating = 0;
        setCurrentRating(0);
    }
    debounce(() => {
        updateRoast(currentRoast.value);
    })
  }

  const handle1 = () => handleClick(1);
  const handle2 = () => handleClick(2);
  const handle3 = () => handleClick(3);
  const handle4 = () => handleClick(4);
  const handle5 = () => handleClick(5);

  return (
    <div className="rating">
        <div className="1" onClick={handle1}>
            { currentRating < 1 ? <Star /> : <StarSolid /> }
        </div>
        <div className="2" onClick={handle2}>
            { currentRating < 2 ? <Star /> : <StarSolid /> }
        </div>
        <div className="3" onClick={handle3}>
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
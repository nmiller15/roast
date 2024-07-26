import { Heart, HeartSolid } from "iconoir-react";
import React from "react";
import './Card.css'

export default function Favorite({ handleHeartClick, isFavorite}) {
  
  return (
    <div className="favorite-container" onClick={handleHeartClick}>
      {isFavorite ? <HeartSolid /> : <Heart />}
    </div>
  );
}
  
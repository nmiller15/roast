import React from 'react'
import './CardList.css'
import Card from './Card'



function CardList({ roasts, favoritesList = false }) {
  return !favoritesList ? (
    <div className="CardList">
        {roasts.map((roast) => {
            return <Card roast={roast} />
        })}
    </div>
  ) :
  (
    <div className="CardList">
      {roasts.map((roast) => {
        if (roast.isFavorite) {
          return <Card roast={roast} />
        } else {
          return <></>;
        }
      })}
    </div>
  )
}

export default CardList
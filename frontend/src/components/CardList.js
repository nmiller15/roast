import React from 'react'
import './CardList.css'
import Card from './Card'



function CardList({ roasts, favoritesList = false, roastStep, roastProgress }) {
  return !favoritesList ? (
    <div className="CardList">
        {roasts.map((roast) => {
            if (roast) {
              return <Card roast={roast} roastStep={roastStep} roastProgress={roastProgress} />
            }
            return null;
        })}
    </div>
  ) :
  (
    <div className="CardList">
      {roasts.map((roast, index) => {
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
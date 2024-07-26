import React from 'react'
import './CardList.css'
import Card from './Card'



function CardList({ roasts, favoritesList = false, roastStep, roastProgress }) {
  return !favoritesList ? (
    <div className="CardList">
        {roasts.map((roast) => {
            return <Card key={roast.id} roast={roast} roastStep={roastStep} roastProgress={roastProgress} />
        })}
    </div>
  ) :
  (
    <div className="CardList">
      {roasts.map((roast, index) => {
        if (roast.isFavorite) {
          return <Card key={roast.id} roast={roast} />
        } else {
          return <></>;
        }
      })}
    </div>
  )
}

export default CardList
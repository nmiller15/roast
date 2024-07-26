import React from 'react'
import './CardList.css'
import Card from './Card'



function CardList({ roasts, favoritesList = false }) {
  return !favoritesList ? (
    <div className="CardList">
        {roasts.map((roast) => {
            return <Card key={roast.id} roast={roast} />
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
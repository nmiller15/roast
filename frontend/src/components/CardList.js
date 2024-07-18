import React from 'react'
import './CardList.css'
import Card from './Card'



function CardList({ roasts }) {
  return (
    <div className="CardList">
        {roasts.map((roast) => {
            return <Card roast={roast} />
        })}
    </div>
  )
}

export default CardList
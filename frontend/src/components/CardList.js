import React from 'react'
import './CardList.css'
import Card from './Card'
import roasts from '../mocks/roasts';



function CardList() {
  return (
    <div className="CardList">
        {roasts.map((roast) => {
            return <Card roast={roast} />
        })}
    </div>
  )
}

export default CardList
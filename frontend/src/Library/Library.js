import React from 'react'
import './Library.css';
import CardList from '../components/CardList';
import roasts from '../mocks/roasts';

function Library() {
  return (
    <div className="Library">
        <h1>Library</h1>
        <CardList roasts={roasts} />
    </div>
  )
}

export default Library
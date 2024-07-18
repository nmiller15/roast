import React from 'react'
import './About.css'
import { HeatingSquare } from 'iconoir-react'

function About() {
  return (
    <div className="About Page">
      <h1>About</h1>
      <div className="center-title">
        <HeatingSquare />
        <h2>Roast</h2>
        <p className="subtitle">Know your home roasts.</p>
      </div>
      <div className="description">
        <p>Roast is an application that I made for me! I started roasting coffee at home to save some money, and fell in love with the craft. This app is designed to keep track of your roasting process, while you roast.</p>
        <p>The minimalist approach is intentional, only tracking what a hobbyist with a stove-top approach might keep.</p>
      </div>
      <div className='center-title'>
        <h2>About Me</h2>
        <p className="subtitle">Nolan Miller</p>
      </div>
      <div className='description bottom'>
        <p>I’m a self-taught web developer with a passion for design, coffee, Jesus, and technology. </p>
        <p>If you have any suggestions, reach out to me at <a href="mailto:mail@nolanmiller.me">mail@nolanmiller.me.</a></p>
      </div>
    </div>
  )
}

export default About
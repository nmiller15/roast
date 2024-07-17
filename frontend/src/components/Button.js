import React from 'react'
import './Button.css'

function Button({ color, text }) {

    // Turns prop into a usable color variable
    
    return (
        <div className="Button"
            style={{backgroundColor: color}} >
            <p>{text}</p>
        </div>
    )
}

export default Button
import React from 'react'
import './Button.css'

function Button({ color, text }) {
    
    return (
        <div className="Button"
            style={{backgroundColor: color}} >
            <p>{text}</p>
        </div>
    )
}

export default Button
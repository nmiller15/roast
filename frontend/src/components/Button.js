import React from 'react'
import './Button.css'

function Button({ color, text, callback }) {
    
    return (
        <div className="Button" onClick={callback ? callback : null}
            style={{backgroundColor: color}} >
            <p>{text}</p>
        </div>
    )
}

export default Button
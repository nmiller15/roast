import React from 'react';
import { HeatingSquare, Book, ProfileCircle, InfoCircle  } from 'iconoir-react';
import './Footer.css';

export const Footer = () => {

    const size = "38px"

    return (
        <div className="Footer">
            <nav>
                <HeatingSquare height={size} width={size}/>
                <Book height={size} width={size}/>
                <ProfileCircle height={size} width={size}/>
                <InfoCircle height={size} width={size}/>
            </nav>
        </div>    
    )
}


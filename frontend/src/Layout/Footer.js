import React from 'react';
import { HeatingSquare, Book, ProfileCircle, InfoCircle  } from 'iconoir-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const size = "38px"

    return (
        <>
            <nav>
                <Link to="/">
                    <HeatingSquare height={size} width={size}/>
                </Link>
                <Link to="/library">
                    <Book height={size} width={size}/>
                </Link>
                <Link to="/account">
                    <ProfileCircle height={size} width={size}/>
                </Link>
                <Link to="/about">
                    <InfoCircle height={size} width={size}/>
                </Link>
            </nav>
        </>    
    )
}

export default Footer;
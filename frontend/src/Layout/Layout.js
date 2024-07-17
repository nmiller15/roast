import React from 'react'
import Footer from './Footer'
import './Footer.css'

const Layout = (props) => {
    return (
        <>
            {props.children}     
            <Footer />
        </>
    )
}

export default Layout;
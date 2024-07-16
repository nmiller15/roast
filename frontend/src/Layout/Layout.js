import React from 'react'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>        
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;
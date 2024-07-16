import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Library from './Library/Library'
import Account from './Account/Account'
import About from './About/About'

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: "/library",
        element: (
            <Layout>
                <Library />
            </Layout>
        )
    }, 
    {
        path: "/account",
        element: (
            <Layout>
                <Account />
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <About />  
            </Layout>
        )
    }
    
])

export default router;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Layout from './Layout/Layout'

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <div>
                    <h1>root</h1>
                </div>
            </Layout>
        ),
    },
    {
        path: "/library",
        element: (
            <Layout>
                <div>
                    <h1>Library</h1>
                </div>
            </Layout>
        )
    }, 
    {
        path: "/account",
        element: (
            <Layout>
                <div>
                   <h1>Account</h1>
                </div>
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <div>
                    <h1>About</h1>;
                </div>  
            </Layout>
        )
    }
    
])

export default router;
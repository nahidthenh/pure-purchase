import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Home, Products, Category } from '../pages/index'
import Error from "../components/others/Error";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails></ProductDetails>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
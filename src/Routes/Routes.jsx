import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Home, Category } from '../pages/index'
import Error from "../components/others/Error";

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
                path: '/category',
                element: <Category></Category>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
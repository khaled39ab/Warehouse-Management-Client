import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home.jsx";
import SignIn from "../../Pages/Authentication/SignIn/SignIn";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import About from "../../Pages/About Us/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Store from "../../Store Items/Store";
import AddItem from "../../Pages/Features For User/Add Item/AddItem";
import UpdateItem from "../../Pages/Features For User/Update An item/UpdateItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/store',
                element: <Store />
            },
            {
                path: '/add-item',
                element: <AddItem />
            },
            {
                path: '/updateItem/:id',
                element: <UpdateItem />,
                loader: ({params}) => fetch(`http://localhost:4000/item/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);


import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home.jsx";
import SignIn from "../../Pages/Authentication/SignIn/SignIn";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import About from "../../Pages/About Us/About";
import Blogs from "../../Pages/Blogs/Blogs";
import AddItem from "../../Pages/Features For User/Add Item/AddItem";
import UpdateItem from "../../Pages/Features For User/Update An item/UpdateItem";
import ItemDetails from "../../Pages/Home/Items/Item Details/ItemDetails";
import RequireAuth from "../RequireAuth/RequireAuth";
import MyItems from "../../Pages/Features For User/My Items/MyItems";
import BrandItems from "../../Pages/BrandItems/BrandItems";
import Inventory from "../../Pages/Inventory/Inventory";
import BuyingInfo from "../../Pages/Home/Buying Info/BuyingInfo";
import JsVsNode from "../../Pages/Blogs/Subject/Js Vs Node/JsVsNode";
import SqlNoSql from "../../Pages/Blogs/Subject/Sql Vs NoSql/SqlNoSql";
import AboutJWT from "../../Pages/Blogs/Subject/About JWT/AboutJWT";

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
                path: '/inventory',
                element: <Inventory />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/add-item',
                element: <RequireAuth><AddItem /></RequireAuth>
            },
            {
                path: '/item/:id',
                element: <RequireAuth><UpdateItem /></RequireAuth>,
                loader: ({ params }) => fetch(`http://localhost:4000/item/${params.id}`)
            },
            {
                path: '/itemDetails/:id',
                element: <RequireAuth><ItemDetails /></RequireAuth>,
                loader: ({ params }) => fetch(`http://localhost:4000/item/${params.id}`)
            },
            {
                path: '/my-items',
                element: <RequireAuth><MyItems /></RequireAuth>
            },
            {
                path: '/brand-items/:brand',
                element: <RequireAuth><BrandItems /></RequireAuth>,
                loader: ({ params }) => fetch(`http://localhost:4000/company-items?company_name=${params.brand}`)
            },
            {
                path: '/buying-info',
                element: <BuyingInfo />
            },
            {
                path: '/js-vs-node',
                element: <JsVsNode />
            },
            {
                path: '/sql-vs-nosql',
                element: <SqlNoSql />
            },
            {
                path: '/about-jwt',
                element: <AboutJWT />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);


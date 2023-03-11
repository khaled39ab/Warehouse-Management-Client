import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home.jsx";
import SignIn from "../../Pages/Authentication/SignIn/SignIn";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";

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
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);


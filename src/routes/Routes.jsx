import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Destination from "../pages/Destination/Destination/Destination";
import All_Destination from "../pages/Destination/All_Destination/All_Destination";
import One_Destination from "../pages/Destination/One_Destination/One_Destination";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/oneDestination/:id',
                element: <One_Destination></One_Destination>
            }
        ]
    }
])

export default routes;
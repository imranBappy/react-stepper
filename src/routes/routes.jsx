
import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";
import Courses from "../pages/Courses";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/courses",
        element: <Courses />,
    },
    {
        path: "/courses/:id",
        element: <Courses />,
    },
    {
        path: "/account",
        element: <Account />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/test",
        element: <Test />,

    }
    , {
        path: "*",
        element: <div>404</div>,
    }
]);

export default router;
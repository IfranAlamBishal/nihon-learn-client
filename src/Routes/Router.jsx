import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import UserLayout from "../Layouts/User/UserLayout";
import Lessons from "../Pages/Users/Lessons/Lessons";
import Vocabularies from "../Pages/Users/Vocabularies/Vocabularies";
import Register from "../Pages/Register/Register";
import Login from "../Pages/LogIn/Login";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/register",
        element: <Register />

    },

    {
        path: "/",
        element: <ProtectedRoutes><UserLayout /></ProtectedRoutes>,
        children: [
            {
                path: "/lessons",
                element: <ProtectedRoutes> <Lessons /> </ProtectedRoutes>
            },
            {
                path: "/lessons/lesson-no/:no",
                element: <ProtectedRoutes><Vocabularies /></ProtectedRoutes>
            },
            {
                path: "/tutorials",

            },
        ]
    },

    {
        path: "dashboard",
        children: [
            {
                path: "Users"
            },
            {
                path: "manage_lessons"
            },
            {
                path: "add_lesson"
            },
            {
                path: "manage_vocabularies"
            },
            {
                path: "add_vocabularies"
            },
        ]
    }
]);
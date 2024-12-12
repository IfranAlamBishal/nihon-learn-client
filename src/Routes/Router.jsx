import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from "../Layouts/User/UserLayout";
import Lessons from "../Pages/Users/Lessons/Lessons";
import Vocabularies from "../Pages/Users/Vocabularies/Vocabularies";
import Register from "../Pages/Register/Register";
import Login from "../Pages/LogIn/Login";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import AdminLayout from "../Layouts/Admin/AdminLayout";
import AdminRoutes from "./AdminRoutes/AdminRoutes";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <Login />
    },
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
        element: <AdminRoutes><AdminLayout /></AdminRoutes>,
        children: [
            {
                path: "users"
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
                path: "add_vocabulary"
            },
            {
                path: "add_tutorial"
            },
            {
                path: "manage_tutorials"
            }
        ]
    }
]);
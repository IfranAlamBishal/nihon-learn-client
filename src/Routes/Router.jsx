import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from "../Layouts/User/UserLayout";
import Lessons from "../Pages/Users/Lessons/Lessons";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/lessons",
                element: <Lessons/>

            },
            {
                path: "/tutorials",

            },
            {
                path: "/login",

            },
            {
                path: "/register",

            },
        ]
    },

    {
        path: "dashboard",
        children:[
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
import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from "../Layouts/User/UserLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/lessons",

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
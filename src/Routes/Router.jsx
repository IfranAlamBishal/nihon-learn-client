import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from "../Layouts/User/UserLayout";
import Lessons from "../Pages/Users/Lessons/Lessons";
import Vocabularies from "../Pages/Users/Vocabularies/Vocabularies";

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
                path:"/lessons/lesson-no/:no",
                element: <Vocabularies/>
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
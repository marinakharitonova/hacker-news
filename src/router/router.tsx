import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import React from "react";
import StoryPage from "../components/StoryPage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "/:storyId",
                element: <StoryPage/>,
            },
        ]
    }
]);
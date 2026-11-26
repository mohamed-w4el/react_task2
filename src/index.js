import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Projects from "./Projects/Projects";
import Dashboard from "./Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

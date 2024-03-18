import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./pages/Form";
import Verify from "./pages/Verify";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <Form />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "/category",
        element: <Categories />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

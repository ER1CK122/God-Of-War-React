import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./pages/app";
import PersonagensPage from "./pages/personagens-page";
import LoginPage from "./pages/login-page";
import Sandbox from "./pages/sandbox";
import Kratos from "./pages/kratos-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "personagens-page",
    element: <PersonagensPage />,
  },
  {
    path: "login-page",
    element: <LoginPage/>,
  },
  {
    path: "sandbox",
    element: <Sandbox/>,
  },
  {
    path: "kratos-page",
    element: <Kratos/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
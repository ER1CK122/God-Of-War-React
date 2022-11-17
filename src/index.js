import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PersonagensPage from "./routes/personagens-page";
import LoginPage from "./routes/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "personagens-page",
    element: <PersonagensPage />,
  },
  {
    path: "login-page",
    element: <LoginPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
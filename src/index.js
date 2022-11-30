import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./pages/app";
import PersonagensPage from "./pages/personagens-page";
import Sandbox from "./pages/list-add-remove";
import Kratos from "./pages/kratos-page";
import ListaPersonagem from "./pages/lista-personagens"

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
    path: "list-add-remove",
    element: <Sandbox/>,
  },
  {
    path: "kratos-page",
    element: <Kratos/>,
  },
  {
    path: "lista-personagem",
    element: <ListaPersonagem/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
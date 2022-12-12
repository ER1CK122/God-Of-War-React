import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./pages/app";
import LoginPage from "./pages/login-page";
import CriarContaPage from "./pages/criar-conta-page";
import TrofeusPage from "./pages/trofeus-page";
import Sandbox from "./pages/list-add-remove";
import Kratos from "./pages/kratos-page";
import ListaPersonagem from "./pages/lista-personagens"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "criar-conta-page",
    element: <CriarContaPage/>,
  },
  {
    path: "app-page",
    element: <App/>,
  },
  {
    path: "trofeus-page",
    element: <TrofeusPage/>,
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);
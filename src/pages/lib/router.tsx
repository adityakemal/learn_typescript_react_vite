import { createBrowserRouter } from "react-router-dom";
import { privateRoutes, removeRouteIfLogin } from "./helpers";
import App from "../../App";
import Login from "../Login";

export default createBrowserRouter([
  {
    path: "/",
    element: privateRoutes(<App />),
  },
  {
    path: "/login",
    element: removeRouteIfLogin(<Login />),
  },
]);

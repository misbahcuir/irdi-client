import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Sample from "../Sample";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/sample",
        element: <Sample></Sample>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/admin-login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DataTableList from "../Pages/List";
import New from "../Pages/New";
import Single from "../Pages/Single";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import { Stack } from "@mui/material";
import { productInputs, userInputs } from "../formSource";
import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <Fragment>
      <Stack display="flex" flexDirection="row">
        <Sidebar />
        <div className="navWithOutlet">
          <Navbar />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </Stack>
    </Fragment>
  );
};

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);
  const loggedInUser = user.user;
  // console.log("logged in user: ", loggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <DataTableList title="Users" btnText="Add New User" link="users" />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/:userId",
        element: (
          <ProtectedRoute>
            <Single />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/new",
        element: (
          <ProtectedRoute>
            <New inputs={userInputs} title="Add New User" />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <DataTableList
              title="Products"
              btnText="Add New Product"
              link="products"
            />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <ProtectedRoute>
            <Single />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute>
            <New inputs={productInputs} title="Add New Product" />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}

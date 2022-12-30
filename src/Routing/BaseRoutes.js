import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DataTableList from "../Pages/List";
import New from "../Pages/New";
import Single from "../Pages/Single";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Fragment } from "react";
import { Stack } from "@mui/material";
import { productInputs, userInputs } from "../formSource";

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
        element: <Home />,
      },
      {
        path: "/users",
        element: (
          <DataTableList title="Users" btnText="Add New User" link="users" />
        ),
      },
      {
        path: "/users/:userId",
        element: <Single />,
      },
      {
        path: "/users/new",
        element: <New inputs={userInputs} title="Add New User" />,
      },
      {
        path: "/products",
        element: (
          <DataTableList
            title="Products"
            btnText="Add New Product"
            link="products"
          />
        ),
      },
      {
        path: "/products/:productId",
        element: <Single />,
      },
      {
        path: "/products/new",
        element: <New inputs={productInputs} title="Add New Product" />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DataTableList from "../Pages/List";
import Single from "../Pages/Single";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import New from "../Pages/new/New";
import NewHotel from "../Pages/newHotel/NewHotel";
import NewRoom from "../Pages/newRoom/NewRoom";
import "../App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Fragment, useContext } from "react";
import { Stack } from "@mui/material";
import { productInputs, userInputs } from "../formSource";
import { AuthContext } from "../Context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "../DatatableSource";

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
  const user = localStorage.getItem("user");

  if (!user) {
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
            <DataTableList
              columns={userColumns}
              title="Users"
              btnText="Add New User"
              link="users"
            />
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
        path: "/hotels",
        element: (
          <ProtectedRoute>
            <DataTableList
              columns={hotelColumns}
              title="Hotels"
              btnText="Add New Hotel"
              link="hotels"
            />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rooms",
        element: (
          <ProtectedRoute>
            <DataTableList
              columns={roomColumns}
              title="Rooms"
              btnText="Add New Room"
              link="rooms"
            />
          </ProtectedRoute>
        ),
      },
      {
        path: "/hotels/:hotelId",
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
            <New inputs={userInputs} title="Add New Product" />
          </ProtectedRoute>
        ),
      },
      {
        path: "/hotels/new",
        element: (
          <ProtectedRoute>
            <NewHotel />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rooms/new",
        element: (
          <ProtectedRoute>
            <NewRoom />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}

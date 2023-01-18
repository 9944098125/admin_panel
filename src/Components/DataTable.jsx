import React, { Fragment, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../DatatableSource";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../Redux/Actions/getUsers";

export default function DataTable({ title, btnText, link }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const GetUsers = useSelector((state) => state.getUsers);

  useEffect(() => {
    dispatch(getUsersAction());
    setData(GetUsers.users);
  }, [dispatch, data]);

  const toggleTheme = useSelector((state) => state.themeReducer);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              to="/users/test"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <VisibilityIcon sx={{ cursor: "pointer" }} />
            </Link>
            <DeleteIcon
              onClick={() => deleteRow(params.row.id)}
              sx={{ color: "red", cursor: "pointer" }}
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Fragment>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: `${toggleTheme.toggleTheme ? "white" : "black"}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
            }}
          >
            {title}
          </Typography>
          <Link
            to={`/${link}/new`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              sx={{
                backgroundColor: "primary.bg",
                color: "primary.main",
                borderRadius: "9px",
                "&:hover": {
                  backgroundColor: "secondary.bg",
                  color: "secondary.main",
                },
              }}
            >
              {btnText}
            </Button>
          </Link>
        </Box>
        <div
          style={{
            height: 400,
            width: "100%",
            color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
          }}
        >
          <DataGrid
            style={{ color: `${toggleTheme.toggleTheme ? "black" : "white"}` }}
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      </Box>
    </Fragment>
  );
}

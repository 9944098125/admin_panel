import React, { Fragment, useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useLocation } from "react-router-dom";
import { Button, CircularProgress, Typography } from "@mui/material";
import { DarkModeContext } from "../Context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteUHR, getUHR } from "../Redux/Actions/getUHR";

export default function DataTable({ title, btnText, link, columns }) {
  const dispatch = useDispatch();
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);

  const data = useSelector((state) => state.getUHR);

  useEffect(() => {
    dispatch(getUHR(path));
  }, [dispatch, path]);

  useEffect(() => {
    setList(data.UHRData);
  }, [list, data.UHRData]);

  const deleteRow = (id) => {
    dispatch(deleteUHR(path, id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <VisibilityIcon sx={{ cursor: "pointer" }} />
            </Link>
            <DeleteIcon
              onClick={() => deleteRow(params.row._id)}
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
          backgroundColor: darkMode ? "black" : "white",
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
              color: darkMode ? "white" : "black",
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
            color: darkMode ? "white" : "black",
          }}
        >
          {data.loading ? (
            <CircularProgress />
          ) : (
            <DataGrid
              style={{ color: darkMode ? "white" : "black" }}
              rows={list}
              columns={columns.concat(actionColumn)}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              getRowId={(row) => row._id}
            />
          )}
        </div>
      </Box>
    </Fragment>
  );
}

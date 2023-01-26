import React, { Fragment, useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../DatatableSource";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useFetcher, useLocation, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import useFetch from "../Hooks/useFetch";
import axios from "axios";
import { DarkModeContext } from "../Context/darkModeContext";

export default function DataTable({ title, btnText, link, columns }) {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);
  // console.log(data);

  useEffect(() => {
    setList(data);
  }, [data, setList]);

  const deleteRow = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
      navigate(`/${link}/new`);
    } catch (err) {}
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
          <DataGrid
            style={{ color: darkMode ? "white" : "black" }}
            rows={list}
            columns={columns.concat(actionColumn)}
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

import React, { Fragment } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Widget({ type }) {
  let data;

  // temporary
  const amount = 500;
  const difference = 20;
  const toggleTheme = useSelector((state) => state.themeReducer);

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "see all users",
        to: "/users",
        icon: (
          <PersonIcon
            sx={{
              color: "#f44336",
              backgroundColor: "#ffcdd2",
              p: 0.5,
              borderRadius: "9px",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        to: "/orders",
        icon: (
          <ShoppingCartOutlinedIcon
            sx={{
              color: "#cddc39",
              backgroundColor: "#f0f4c3",
              p: 0.5,
              borderRadius: "9px",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        to: "/earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            sx={{
              color: "#4caf50",
              backgroundColor: "#c8e6c9",
              p: 0.5,
              borderRadius: "9px",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        to: "/balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            sx={{
              color: "#673ab7",
              backgroundColor: "#d1c4e9",
              p: 0.5,
              borderRadius: "9px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <Box
        sx={{
          p: 1.5,
          flex: "1",
          display: "flex",
          height: "100px",
          borderRadius: "9px",
          justifyContent: "space-between",
          boxShadow: `${
            toggleTheme.toggleTheme
              ? "0 3px 10px rgb(0 0 0 / 0.2)"
              : "12px 12px 2px 1px rgba(0, 0, 255, .2)"
          }`,
          color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "800", fontSize: "18px" }}>
            {data.title}
          </Typography>
          <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
            {data.isMoney && "$"}
            {amount}
          </Typography>
          <Link
            to={data.to}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                fontWeight: "300",
                fontSize: "12px",
                textDecoration: "underline",
              }}
            >
              {data.link}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
            {difference}
          </Typography>
          <IconButton>{data.icon}</IconButton>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Widget;

// box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

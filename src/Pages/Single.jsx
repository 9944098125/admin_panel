import React, { Fragment, useEffect, useContext } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Chart from "../Components/Chart";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import FlagIcon from "@mui/icons-material/Flag";
import TableList from "../Components/Table";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../Context/darkModeContext";

function Single() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Fragment>
      <Box
        sx={{
          p: 1,
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        {/* top part */}
        <Box sx={{ p: 2, display: "flex", gap: "20px" }}>
          {/* left part */}
          <Box
            sx={{
              flex: "1.2",
              boxShadow: darkMode
                ? "6px -11px 26px 0px rgba(0,251,255,0.92)"
                : "0 3px 10px rgb(0 0 0 / 0.2)",
              p: 2,
              borderRadius: "9px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "17px", fontWeight: "800" }}>
                Information
              </Typography>
              <Button
                sx={{
                  backgroundColor: "primary.bg",
                  color: "primary.dark",
                  p: 0.2,
                  borderRadius: "4px",
                }}
              >
                Edit
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Avatar src="" sx={{ height: "100px", width: "100px" }} />
              {/* details of the product / user/ item */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography
                  sx={{ fontSize: "15px", fontWeight: "800", color: "#555" }}
                >
                  {/* name */}
                  Akella Srinivas Prasad
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* email */}
                  <EmailIcon sx={{ color: "primary.main", fontSize: "20px" }} />
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    srinivas72075@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* phone number */}
                  <LocalPhoneIcon
                    sx={{ color: "primary.main", fontSize: "20px" }}
                  />
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    +120 23434 3453 3454
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* address */}
                  <BusinessIcon
                    sx={{ color: "primary.main", fontSize: "20px" }}
                  />
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    DNO. - 11-220, venue all street, san-fransisco
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* country */}
                  <FlagIcon sx={{ color: "primary.main", fontSize: "20px" }} />
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    United States Of America
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* right part */}
          <Box sx={{ flex: "2.5" }}>
            <Chart aspect={3 / 1} title="User Transactions (Last 6 months)" />
          </Box>
        </Box>
        {/* bottom part */}
        <Box
          sx={{
            p: 3,
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "12px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            Last Transactions
          </Typography>
          <TableList />
        </Box>
      </Box>
    </Fragment>
  );
}

export default Single;

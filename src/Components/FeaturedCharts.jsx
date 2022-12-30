import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";

function FeaturedCharts() {
  const toggleTheme = useSelector((state) => state.themeReducer);

  return (
    <Fragment>
      <Box
        sx={{
          flex: "3",
          boxShadow: `${
            toggleTheme.toggleTheme
              ? "0 3px 10px rgb(0 0 0 / 0.2)"
              : "12px 12px 2px 1px rgba(0, 0, 255, .2)"
          }`,
          p: 2,
          borderRadius: "9px",
          color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
        }}
      >
        {/* top part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            Total Revenue
          </Typography>
          <MoreVertIcon fontSize="16px" />
        </Box>
        {/* bottom part */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            p: 3,
          }}
        >
          {/* featured chart with react-circular-progressbar */}
          <Box sx={{ height: "120px", width: "120px" }}>
            <CircularProgressbar value={70} text="70%" />
          </Box>
          <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
            Total sales made today
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            $432
          </Typography>
          <Typography
            sx={{ fontSize: "10px", fontWeight: "300", textAlign: "center" }}
          >
            Previous transactions processing, Last payment may not be included
          </Typography>
        </Box>
        {/* summary */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: "600" }}>
              Target
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", color: "red" }}>
              <ArrowDropDownIcon fontSize="small" />
              <Typography sx={{ fontSize: "8px", fontWeight: "300" }}>
                $5603
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: "600" }}>
              Last Week
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", color: "green" }}>
              <ArrowDropUpIcon fontSize="small" />
              <Typography sx={{ fontSize: "8px", fontWeight: "300" }}>
                $4356
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: "600" }}>
              Last Month
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", color: "red" }}>
              <ArrowDropDownIcon fontSize="small" />
              <Typography sx={{ fontSize: "8px", fontWeight: "300" }}>
                $5603
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default FeaturedCharts;

import { Box, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import Chart from "../Components/Chart";
import FeaturedCharts from "../Components/FeaturedCharts";
import Widget from "../Components/Widget";
import TableList from "../Components/Table";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const toggleTheme = useSelector((state) => state.themeReducer);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Fragment>
      {/* home container */}
      <Box
        sx={{
          p: 0.5,
          backgroundColor: `${toggleTheme.toggleTheme ? "white" : "black"}`,
        }}
      >
        {/* widgets container */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Box>
        {/* charts container  */}
        <Box sx={{ pt: 1, mb: 2 }} display="flex" gap="20px">
          <FeaturedCharts />
          <Chart aspect={2 / 1} title="Last 6 months (Revenue)" />
        </Box>
        {/* list in a table */}
        <Box>
          <Typography sx={{ fontSize: "14px" }}>Latest Transactions</Typography>
          <TableList />
        </Box>
      </Box>
    </Fragment>
  );
}

export default Home;

import { Box, Typography } from "@mui/material";
import React, { Fragment, useEffect, useContext } from "react";
import Chart from "../Components/Chart";
import FeaturedCharts from "../Components/FeaturedCharts";
import Widget from "../Components/Widget";
import TableList from "../Components/Table";
import { useSelector } from "react-redux";

function Home() {
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
  return (
    <Fragment>
      {/* home container */}
      <Box
        sx={{
          p: 0.5,
          backgroundColor: darkMode ? "black" : "white",
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

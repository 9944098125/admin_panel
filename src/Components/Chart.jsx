import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 450 },
  { name: "March", Total: 3200 },
  { name: "April", Total: 2300 },
  { name: "May", Total: 1200 },
  { name: "June", Total: 2300 },
];

function Chart({ aspect, title }) {
  const toggleTheme = useSelector((state) => state.themeReducer);

  return (
    <Fragment>
      <Box
        sx={{
          flex: "7",
          boxShadow: `${
            toggleTheme.toggleTheme
              ? "0 3px 10px rgb(0 0 0 / 0.2)"
              : "12px 12px 2px 1px rgba(0, 0, 255, .2)"
          }`,
          borderRadius: "9px",
          p: 1,
          color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Fragment>
  );
}

export default Chart;

import { Box } from "@mui/system";
import React, { Fragment, useEffect, useContext } from "react";
import DataTable from "../Components/DataTable";
import { DarkModeContext } from "../Context/darkModeContext";

function DataTableList({ title, btnText, link, columns }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Fragment>
      <Box
        sx={{
          p: 1,
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <DataTable
          columns={columns}
          title={title}
          btnText={btnText}
          link={link}
        />
      </Box>
    </Fragment>
  );
}

export default DataTableList;

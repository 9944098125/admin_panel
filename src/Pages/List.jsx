import { Box } from "@mui/system";
import React, { Fragment, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import DataTable from "../Components/DataTable";

function DataTableList({ title, btnText, link, columns }) {
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
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

import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import DataTable from "../Components/DataTable";

function DataTableList({ title, btnText, link }) {
  const toggleTheme = useSelector((state) => state.themeReducer);

  return (
    <Fragment>
      <Box
        sx={{
          p: 1,
          backgroundColor: `${toggleTheme.toggleTheme ? "white" : "black"}`,
        }}
      >
        <DataTable title={title} btnText={btnText} link={link} />
      </Box>
    </Fragment>
  );
}

export default DataTableList;

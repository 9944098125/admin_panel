import { Box } from "@mui/system";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import DataTable from "../Components/DataTable";
import { useNavigate } from "react-router-dom";

function DataTableList({ title, btnText, link }) {
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

import { Avatar, Box, Typography } from "@mui/material";
import React, { Fragment, useState, useContext } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CropFreeIcon from "@mui/icons-material/CropFree";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DarkModeContext } from "../Context/darkModeContext";

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const [activeToggle, setActiveToggle] = useState(false);

  function toggleTheming() {
    setActiveToggle(!activeToggle);
    dispatch({ type: "TOGGLE" });
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Fragment>
      <Box
        sx={{
          height: "36.5px",
          p: 1,
          pl: 4,
          pr: 4,
          borderBottom: "4px solid cyan",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <Box
          sx={{
            border: "2px solid cyan",
            display: "flex",
            borderRadius: "8px",
            height: "33px",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "12px",
              color: darkMode ? "white" : "black",
            }}
            placeholder="Search The Panel"
            inputProps={{ "aria-label": "search the panel" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: darkMode ? "white" : "black" }} />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }} gap="20px">
          <LanguageIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: darkMode ? "white" : "black",
            }}
          />
          {activeToggle ? (
            <WbSunnyIcon
              sx={{ fontSize: "25px", cursor: "pointer", color: "white" }}
              onClick={toggleTheming}
            />
          ) : (
            <DarkModeIcon
              sx={{ fontSize: "25px", cursor: "pointer" }}
              onClick={toggleTheming}
            />
          )}
          <CropFreeIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: darkMode ? "white" : "black",
            }}
          />
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={5}
            color="error"
          >
            <NotificationsIcon
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                color: darkMode ? "white" : "black",
              }}
            />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={10}
            color="error"
          >
            <MessageIcon
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                color: darkMode ? "white" : "black",
              }}
            />
          </Badge>
          <MenuIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: darkMode ? "white" : "black",
            }}
          />
          <Avatar
            sx={{ height: "30px", width: "30px" }}
            src={user !== null ? user.profilePicture : ""}
          />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Navbar;

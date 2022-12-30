import { Avatar, Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
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
import toggleTheme from "../Redux/Actions/themeAction";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const [activeToggle, setActiveToggle] = useState(false);
  const toggleTheming = () => {
    setActiveToggle(!activeToggle);
    dispatch(toggleTheme(!activeToggle));
  };

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
          backgroundColor: `${activeToggle ? "white" : "black"}`,
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
              color: `${activeToggle ? "black" : "white"}`,
            }}
            placeholder="Search The Panel"
            inputProps={{ "aria-label": "search the panel" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: `${activeToggle ? "black" : "white"}` }} />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }} gap="20px">
          <LanguageIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: `${activeToggle ? "black" : "white"}`,
            }}
          />
          {activeToggle ? (
            <DarkModeIcon
              sx={{ fontSize: "25px", cursor: "pointer" }}
              onClick={toggleTheming}
            />
          ) : (
            <WbSunnyIcon
              sx={{ fontSize: "25px", cursor: "pointer", color: "white" }}
              onClick={toggleTheming}
            />
          )}
          <CropFreeIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: `${activeToggle ? "black" : "white"}`,
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
                color: `${activeToggle ? "black" : "white"}`,
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
                color: `${activeToggle ? "black" : "white"}`,
              }}
            />
          </Badge>
          <MenuIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              color: `${activeToggle ? "black" : "white"}`,
            }}
          />
          <Avatar sx={{ height: "30px", width: "30px" }} src="" />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Navbar;

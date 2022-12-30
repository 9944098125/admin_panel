import React, { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { lists, main, services, useful, user } from "./SidebarItems";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleTheme = useSelector((state) => state.themeReducer);

  return (
    <Fragment>
      <Box
        sx={{
          p: 1.5,
          flex: "2",
          borderRight: "4px solid cyan",
          backgroundColor: `${toggleTheme.toggleTheme ? "white" : "black"}`,
          color: `${toggleTheme.toggleTheme ? "black" : "white"}`,
        }}
      >
        {/* logo */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderBottom: "4px solid cyan", p: 1 }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "900",
                transform: "scale(1.1, 1.2)",
                fontSize: "16px",
              }}
            >
              Admin Application
            </Typography>
          </Link>
        </Box>
        <Box sx={{ height: "75vh", overflowY: "scroll", pt: 2, pb: 3 }}>
          <Typography sx={{ fontWeight: "900", fontSize: "10px" }}>
            MAIN
          </Typography>
          <List sx={{ pt: "0px" }}>
            {main.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderRadius: "9px",
                  "&:hover": { backgroundColor: "primary.bg" },
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      p: 0.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "primary.dark",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontWeight: "900", fontSize: "10px" }}>
            LISTS
          </Typography>
          <List sx={{ pt: "0px" }}>
            {lists.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderRadius: "9px",
                  "&:hover": { backgroundColor: "primary.bg" },
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      p: 0.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "primary.dark",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontWeight: "900", fontSize: "10px" }}>
            USEFUL
          </Typography>
          <List sx={{ pt: "0px" }}>
            {useful.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderRadius: "9px",
                  "&:hover": { backgroundColor: "primary.bg" },
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      p: 0.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "primary.dark",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontWeight: "900", fontSize: "10px" }}>
            SERVICES
          </Typography>
          <List sx={{ pt: "0px" }}>
            {services.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderRadius: "9px",
                  "&:hover": { backgroundColor: "primary.bg" },
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      p: 0.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "primary.dark",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontWeight: "900", fontSize: "10px" }}>
            USER
          </Typography>
          <List sx={{ pt: "0px" }}>
            {user.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  borderRadius: "9px",
                  "&:hover": { backgroundColor: "primary.bg" },
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      p: 0.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "primary.dark",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="20px"
          sx={{ pt: 1, borderTop: "2px solid cyan" }}
        >
          {/* <Box
            sx={{
              height: "20px",
              width: "20px",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "8px",
            }}
          ></Box>
          <Box
            sx={{
              height: "20px",
              width: "20px",
              backgroundColor: "black",
              border: "1px solid grey",
              borderRadius: "8px",
            }}
          ></Box> */}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Sidebar;

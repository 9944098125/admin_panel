import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export const main = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/",
  },
];

export const lists = [
  {
    icon: <PeopleIcon />,
    text: "Users",
    link: "/users",
  },
  {
    icon: <ProductionQuantityLimitsIcon />,
    text: "Products",
    link: "/products",
  },
  {
    icon: <SettingsVoiceIcon />,
    text: "Orders",
    link: "/",
  },
  {
    icon: <DeliveryDiningIcon />,
    text: "Delivery",
    link: "/",
  },
];

export const useful = [
  {
    icon: <QueryStatsIcon />,
    text: "Stats",
    link: "/",
  },
  {
    icon: <NotificationsIcon />,
    text: "Notifications",
    link: "/",
  },
];

export const services = [
  {
    icon: <SettingsSystemDaydreamIcon />,
    text: "System Health",
    link: "/",
  },
  {
    icon: <AddToQueueIcon />,
    text: "Logs",
    link: "/",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
    link: "/",
  },
];

export const user = [
  {
    icon: <AccountCircleIcon />,
    text: "Profile",
    link: "/",
  },
  {
    icon: <LogoutIcon />,
    text: "Logout",
    link: "/",
  },
];

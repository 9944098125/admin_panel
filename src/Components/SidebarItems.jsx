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

export const main = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/home",
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
    link: "/home",
  },
  {
    icon: <DeliveryDiningIcon />,
    text: "Delivery",
    link: "/home",
  },
];

export const useful = [
  {
    icon: <QueryStatsIcon />,
    text: "Stats",
    link: "/home",
  },
  {
    icon: <NotificationsIcon />,
    text: "Notifications",
    link: "/home",
  },
];

export const services = [
  {
    icon: <SettingsSystemDaydreamIcon />,
    text: "System Health",
    link: "/home",
  },
  {
    icon: <AddToQueueIcon />,
    text: "Logs",
    link: "/home",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
    link: "/home",
  },
];

export const user = [
  {
    icon: <AccountCircleIcon />,
    text: "Profile",
    link: "/home",
  },
];

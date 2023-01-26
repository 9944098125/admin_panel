import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//material UI theme provider
import { ThemeProvider } from "@mui/material";
import theme from "./Components/theme";
import { AuthContextProvider } from "./Context/AuthContext";
import { DarkModeContextProvider } from "./Context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

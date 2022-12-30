import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: colors.teal[900],
      main: colors.teal[500],
      light: colors.teal[100],
      bg: colors.teal[50],
    },
    secondary: {
      dark: colors.pink[900],
      main: colors.pink[500],
      light: colors.pink[100],
      bg: colors.pink[50],
    },
  },
  typography: {
    fontFamily: "Unbounded, cursive",
  },
});

export default theme;

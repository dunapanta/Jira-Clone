import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { cyan, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#00bcd4",
    },
    error: {
      main: red.A400,
    },
  },
});

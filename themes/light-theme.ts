import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { cyan, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: cyan[50],
    },
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#e64a19",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

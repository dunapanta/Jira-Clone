import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "themes";
import { UIProvider } from "context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;

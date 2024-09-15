import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#731b1d",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.7rem",
      padding: "0.5em",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.2rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          xs: {
            paddingLeft: 0,
          },
          sm: {
            paddingLeft: "0 !important",
          },
          md: {
            paddingLeft: 0,
          },
          lg: {
            paddingLeft: 0,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        raised: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0 16px 16px",
        },
      },
    },
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

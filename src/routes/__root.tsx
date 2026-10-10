import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <TanStackRouterDevtools />
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

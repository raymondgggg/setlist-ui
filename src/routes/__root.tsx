import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
    component: RootComponent,
})

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
})

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
    )
}

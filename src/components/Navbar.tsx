import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Link } from "@tanstack/react-router"


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:"#232f3e"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{textAlign:'center'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Redux To-Do App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;

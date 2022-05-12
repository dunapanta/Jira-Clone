import { useContext } from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton onClick={openSideMenu} size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Jira Clone</Typography>
      </Toolbar>
    </AppBar>
  );
};

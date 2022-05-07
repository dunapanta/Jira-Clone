import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const menuItems: string[] = ["Inbox", "New", "Trash"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => {}}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  {index % 2 ? (
                    <InboxOutlinedIcon />
                  ) : (
                    <MailOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  {index % 2 ? (
                    <InboxOutlinedIcon />
                  ) : (
                    <MailOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

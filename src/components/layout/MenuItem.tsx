import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface MenuItemProps {
  text: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon,onClick }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;

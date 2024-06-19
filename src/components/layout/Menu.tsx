import React from "react";
import { Drawer, IconButton, List } from "@mui/material";
import {
  Home as HomeIcon,
  AddOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  const onAddNewClick = () => {
    navigate("/movies/create");
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer onClose={toggleDrawer} open={open}>
        <List>
          <MenuItem onClick={onHomeClick} text="Home" icon={<HomeIcon />} />
          <MenuItem
            onClick={onAddNewClick}
            text="Add New"
            icon={<AddOutlined />}
          />
        </List>
      </Drawer>
    </>
  );
};

export default Menu;

import React from "react";
import Menu from "./Menu";
import { AppBar } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";

const Header: React.FC = () => {
  return (
    <AppBar className="header" position="static">
      <Menu />
      <ThemeSwitch />
    </AppBar>
  );
};

export default Header;

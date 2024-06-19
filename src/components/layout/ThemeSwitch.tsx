import { DarkMode, LightMode } from "@mui/icons-material";
import useTheme from "../../hooks/useTheme";
import { IconButton } from "@mui/material";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeSwitch;

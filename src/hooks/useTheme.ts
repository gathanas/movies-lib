import { useContext } from "react";
import { SettingsContext } from "../contexts";

const useTheme = () => {
  const {theme,setTheme} = useContext(SettingsContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};

export default useTheme;
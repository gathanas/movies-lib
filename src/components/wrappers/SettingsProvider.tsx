import { useState } from "react";
import { SettingsContext } from "../../contexts";
import { Theme } from "../../types";

type SettingsProviderProps = {
  children: React.ReactNode;
};

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <SettingsContext.Provider value={{ theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

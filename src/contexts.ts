import { Dispatch, SetStateAction, createContext } from "react";
import { Theme } from "./types";


type SettingsContextProps = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const SettingsContext = createContext<SettingsContextProps>({
    theme: "light",
    setTheme: () => {}
});
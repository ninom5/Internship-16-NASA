import { createContext } from "react";

export interface ThemeContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLightMode: true,
  toggleTheme: () => {},
});

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.className = isLightMode ? "light-theme" : "dark-theme";
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

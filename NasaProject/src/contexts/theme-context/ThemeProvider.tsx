import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

const initialState = {
  isLightMode: true,
};

type ThemeAction = { type: "TOGGLE_THEME" };

const themeReducer = (state: typeof initialState, action: ThemeAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isLightMode: !state.isLightMode };
    default:
      return state;
  }
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    document.body.className = state.isLightMode ? "light-theme" : "dark-theme";
  }, [state.isLightMode]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider
      value={{ isLightMode: state.isLightMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

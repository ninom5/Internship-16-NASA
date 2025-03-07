import { useContext } from "react";
import { EarthImageryContext } from "@contexts/earthImagery-context/EarthImageryContext";

export const useEarthImagery = () => {
  const context = useContext(EarthImageryContext);
  if (!context) throw new Error("Error with useEarthImagery");

  return context;
};

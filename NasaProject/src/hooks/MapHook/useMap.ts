import { MapLocationContext } from "@contexts/index";
import { useContext } from "react";

export const useMap = () => {
  const context = useContext(MapLocationContext);

  if (!context) throw new Error("Error with useMap");

  return context;
};

import { MapLocationContext } from "../../contexts/mapLocation-context/MapLocationContext";
import { useContext } from "react";

export const useMap = () => {
  const context = useContext(MapLocationContext);

  if (!context) throw new Error("Error with useMap");

  return context;
};

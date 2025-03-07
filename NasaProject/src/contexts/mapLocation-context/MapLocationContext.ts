import { createContext } from "react";
import { LatLngExpression } from "leaflet";

interface MapLocationContextType {
  position: LatLngExpression;
  setPosition: (position: LatLngExpression) => void;
}

export const MapLocationContext = createContext<MapLocationContextType>({
  position: [43.508133, 16.440193],
  setPosition: () => {},
});

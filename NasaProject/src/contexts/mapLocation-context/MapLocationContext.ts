import { createContext } from "react";
import { LatLngExpression } from "leaflet";

interface MapLocationContextType {
  position: LatLngExpression;
  setPosition: (position: LatLngExpression) => void;
  requestSatelliteImage: () => void;
  loading: boolean;
  error: any;
  imgUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

export const MapLocationContext = createContext<MapLocationContextType>({
  position: [43.508133, 16.440193],
  setPosition: () => {},
  requestSatelliteImage: () => {},
  loading: false,
  error: null,
  imgUrl: null,
  setImageUrl: () => {},
});

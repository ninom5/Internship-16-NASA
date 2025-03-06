import React, { useState, PropsWithChildren } from "react";
import { MapLocationContext } from "./MapLocationContext";
import { LatLngExpression } from "leaflet";

export const MapLocationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [position, setPosition] = useState<LatLngExpression>([
    43.508133, 16.440193,
  ]);

  return (
    <MapLocationContext.Provider value={{ position, setPosition }}>
      {children}
    </MapLocationContext.Provider>
  );
};

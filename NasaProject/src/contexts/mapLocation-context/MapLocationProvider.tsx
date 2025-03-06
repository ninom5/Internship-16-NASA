import React, { useState, PropsWithChildren } from "react";
import { MapLocationContext } from "./MapLocationContext";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { useFetchEarthImagery } from "../../hooks";
import { useEffect } from "react";

export const MapLocationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [position, setPosition] = useState<LatLngExpression>([
    43.508133, 16.440193,
  ]);
  const [satelliteRequest, setSatelliteRequest] = useState(false);

  const { data, error, loading } = useFetchEarthImagery(
    position as LatLngTuple
  );

  console.log(data, error, loading);

  const requestSatelliteImage = () => {
    if (confirm("Do you want to see the satellite image?")) {
      setSatelliteRequest(true);
    }
  };

  useEffect(() => {
    if (satelliteRequest) {
      setSatelliteRequest(false);
    }
  }, [satelliteRequest, position]);

  useEffect(() => {
    requestSatelliteImage();
  }, [position]);

  return (
    <MapLocationContext.Provider
      value={{ position, setPosition, requestSatelliteImage }}
    >
      {children}
    </MapLocationContext.Provider>
  );
};

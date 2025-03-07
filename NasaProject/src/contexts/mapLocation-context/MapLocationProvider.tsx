import React, { useState, PropsWithChildren, useEffect } from "react";
import { MapLocationContext } from "./MapLocationContext";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { useFetchEarthImagery } from "@hooks/index";

export const MapLocationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [position, setPosition] = useState<LatLngExpression>([
    43.508133, 16.440193,
  ]);
  const [satelliteRequest, setSatelliteRequest] = useState(false);
  const [imgUrl, setImageUrl] = useState<string | null>(null);

  const { loading, error, imageUrl } = useFetchEarthImagery(
    position as LatLngTuple
  );

  const requestSatelliteImage = () => {
    if (confirm("Do you want to see the satellite image?")) {
      setSatelliteRequest(true);
    }
  };

  useEffect(() => {
    if (satelliteRequest) {
      setImageUrl(imageUrl);
      setSatelliteRequest(false);
    }
  }, [satelliteRequest, imageUrl]);

  useEffect(() => {
    // console.log(imgUrl);
  }, [imageUrl]);

  useEffect(() => {
    // requestSatelliteImage();
  }, [position]);

  return (
    <MapLocationContext.Provider
      value={{
        position,
        setPosition,
        requestSatelliteImage,
        error,
        loading,
        imgUrl,
        setImageUrl,
      }}
    >
      {children}
    </MapLocationContext.Provider>
  );
};

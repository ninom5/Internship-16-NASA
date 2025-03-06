import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

export const useMap = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    43.508133, 16.440193,
  ]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude;
        const lng = coords.longitude;
        setPosition([lat, lng]);
      },
      (blocked) => {
        if (blocked) return { position };
      }
    );
  }, []);

  return { position, setPosition };
};

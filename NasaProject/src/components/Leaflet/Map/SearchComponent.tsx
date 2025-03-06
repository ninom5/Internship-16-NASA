import { useEffect } from "react";
import { Geocoder } from "leaflet-control-geocoder";
import { useMap as useLeafletMap } from "react-leaflet";
import { useMap } from "../../../hooks/MapHook/useMap";

export const SearchComponent = () => {
  const map = useLeafletMap();

  const { setPosition } = useMap();

  useEffect(() => {
    if (map) {
      const geocoder = new Geocoder({
        defaultMarkGeocode: false,
      }).on("markgeocode", function (e) {
        const latlng = e.geocode.center;
        setPosition([latlng.lat, latlng.lng]);

        map.setView(latlng, 15);
      });

      geocoder.addTo(map);
    }
  }, [map, setPosition]);

  return null;
};

import {
  MapContainer,
  Marker,
  TileLayer,
  useMap as useLeafletMap,
} from "react-leaflet";
import { useMap } from "../../../hooks/MapHook/useMap";
import { SearchComponent } from "./SearchComponent";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const { position, setPosition } = useMap();

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "70vh", width: "70%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <SearchComponent setPosition={setPosition} />

      <Marker position={position} />
    </MapContainer>
  );
};

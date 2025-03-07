import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useMap } from "@hooks/index";
import { SearchComponent } from "./SearchComponent";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const { position } = useMap();

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

      <SearchComponent />

      <Marker position={position} />
    </MapContainer>
  );
};

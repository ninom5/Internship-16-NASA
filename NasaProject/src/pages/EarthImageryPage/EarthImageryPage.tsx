import { Map } from "../../components/Leaflet/Map/Map";
import { useMap } from "../../hooks/MapHook/useMap";
import { MapLocationProvider } from "../../contexts/mapLocation-context/MapLocationProvider";

export const EarthImageryPage = () => {
  const { loading, error, imgUrl } = useMap();

  if (loading) return <div>loading...</div>;

  if (error) return <div>error: {error}</div>;

  console.log(imgUrl);

  return (
    <MapLocationProvider>
      <section id="earth-imagery-page">
        <h1>Earth Imagery</h1>
        <p>Find the latest satellite images of Earth</p>
        <Map />

        <div className="image-wrapper">
          {imgUrl && <img src={imgUrl} alt="satellite image" />}
        </div>
      </section>
    </MapLocationProvider>
  );
};

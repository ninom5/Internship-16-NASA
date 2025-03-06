import { useFetchEarthImagery } from "../../hooks";
import { Map } from "../../components/Leaflet/Map/Map";

export const EarthImageryPage = () => {
  // const { data, loading, error } = useFetchEarthImagery();

  // if (loading) return <div>loading...</div>;

  // if (error) return <div>error: {error}</div>;

  // console.log(data);

  return <Map />;
};

import { useFetchEarthImagery } from "../../hooks";

export const EarthImageryPage = () => {
  const { data, loading, error } = useFetchEarthImagery();

  if (loading) return <div>loading...</div>;

  if (error) return <div>error: {error}</div>;

  console.log(data);

  return <h1>Earth Imagery Page</h1>;
};

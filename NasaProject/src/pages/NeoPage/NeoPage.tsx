import { useFetchNeo } from "../../hooks";
import NeoList from "../../components/NeoList/NeoList";
import { NearEarthObject } from "../../types/neoContextType";
import { Faq } from "../../components";
import { NeoChart } from "../../components";
import { NeoScatterChart } from "../../components";

export const NeoPage = () => {
  const { data, error, loading } = useFetchNeo();
  if (error) return <div>Error: {error}</div>;

  const neoList: NearEarthObject[] = data?.near_earth_objects
    ? Object.values(
        data.near_earth_objects as Record<string, NearEarthObject[]>
      ).flat()
    : [];

  return (
    <section className="neo-page">
      <NeoList neoList={neoList} isLoading={loading} />
      <h2 id="visualization-title">NEO Data Visualization</h2>
      <NeoChart />
      <NeoScatterChart />
      <Faq />
    </section>
  );
};

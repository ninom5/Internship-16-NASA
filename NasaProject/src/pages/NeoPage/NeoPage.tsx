import { useFetchNeo } from "../../hooks";
import NeoList from "../../components/NeoList/NeoList";
import { NearEarthObject } from "../../types/neoContextType";
import { Faq } from "../../components";
import { NeoChart } from "../../components";
import { NeoScatterChart } from "../../components";
import { motion } from "framer-motion";
import { LoadingAstronaut } from "../../components/LoadingAstronaut/LoadingAstronaut";
import { fadeInRotateAnimation } from "../../constants/Animations";

export const NeoPage = () => {
  const { data, error, loading } = useFetchNeo();

  if (error) return <div>Error: {error}</div>;

  const neoList: NearEarthObject[] = data?.near_earth_objects
    ? Object.values(
        data.near_earth_objects as Record<string, NearEarthObject[]>
      ).flat()
    : [];

  return (
    <motion.div
      variants={fadeInRotateAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="neo-page">
        <NeoList
          neoList={neoList}
          LoadingComponent={LoadingAstronaut}
          isLoading={loading}
        />
        {loading ? (
          <></>
        ) : (
          <>
            <h2 id="visualization-title">NEO Data Visualization</h2>
            <NeoChart />
            <NeoScatterChart />
            <Faq />
          </>
        )}
      </section>
    </motion.div>
  );
};

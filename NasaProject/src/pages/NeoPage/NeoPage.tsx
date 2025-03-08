import { useFetchNeo } from "@hooks/index";
import { NearEarthObject } from "types";
import {
  Faq,
  NeoChart,
  NeoScatterChart,
  NeoList,
  LoadingAstronaut,
} from "@components/index";
import { motion } from "framer-motion";
import { fadeInRotateAnimation } from "@constants/Animations";
import { NeoPieChart } from "@components/index";

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
            <NeoPieChart />
            <Faq />
          </>
        )}
      </section>
    </motion.div>
  );
};

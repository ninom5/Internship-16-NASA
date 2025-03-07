import { useFetchNeo } from "../../hooks";
import NeoList from "../../components/NeoList/NeoList";
import { NearEarthObject } from "../../types/neoContextType";
import { Faq } from "../../components";
import { NeoChart } from "../../components";
import { NeoScatterChart } from "../../components";
import { motion } from "framer-motion";

const homePageVariants = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: { ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: "easeIn" },
  },
};

export const NeoPage = () => {
  const { data, error, loading } = useFetchNeo();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const neoList: NearEarthObject[] = data?.near_earth_objects
    ? Object.values(
        data.near_earth_objects as Record<string, NearEarthObject[]>
      ).flat()
    : [];

  return (
    <motion.div
      variants={homePageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="neo-page">
        <NeoList neoList={neoList} isLoading={loading} />
        <h2 id="visualization-title">NEO Data Visualization</h2>
        <NeoChart />
        <NeoScatterChart />
        <Faq />
      </section>
    </motion.div>
  );
};

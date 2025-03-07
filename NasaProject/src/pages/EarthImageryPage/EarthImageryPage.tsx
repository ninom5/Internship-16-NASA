import { Map } from "../../components/Leaflet/Map/Map";
import { useMap } from "../../hooks/MapHook/useMap";
import { MapLocationProvider } from "../../contexts/mapLocation-context/MapLocationProvider";
import { motion } from "framer-motion";

const earthImageryAnimation = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

export const EarthImageryPage = () => {
  const { loading, error, imgUrl } = useMap();

  if (loading) return <div>loading...</div>;

  if (error) return <div>error: {error}</div>;

  // console.log(imgUrl);

  return (
    <motion.div
      variants={earthImageryAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.div>
  );
};

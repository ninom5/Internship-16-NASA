import { Map } from "@components/index";
import { useMap } from "@hooks/index";
import { MapLocationProvider } from "@contexts/index";
import { fadeInBlurAnimation } from "@constants/Animations";
import { motion } from "framer-motion";

export const EarthImageryPage = () => {
  const { loading, error, imgUrl } = useMap();

  if (loading) return <div>loading...</div>;

  if (error) return <div>error: {error}</div>;

  // console.log(imgUrl);

  return (
    <motion.div
      variants={fadeInBlurAnimation}
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

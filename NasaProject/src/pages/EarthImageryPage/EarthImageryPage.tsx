import { Map } from "@components/index";
import { useEarthImagery } from "@hooks/index";
import { fadeInBlurAnimation } from "@constants/Animations";
import { motion } from "framer-motion";

export const EarthImageryPage = () => {
  const { loading, error, imageUrl } = useEarthImagery();

  if (loading) return <div>loading...</div>;

  if (error) return <div>error: {error}</div>;

  return (
    <motion.div
      variants={fadeInBlurAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section id="earth-imagery-page">
        <h1>Earth Imagery</h1>
        <p>Find the latest satellite images of Earth</p>
        <Map />

        <h2 id="satellite-image-heading">Your satellite image</h2>
        <div className="image-wrapper">
          {imageUrl && <img src={imageUrl} alt="satellite image" />}
        </div>
      </section>
    </motion.div>
  );
};

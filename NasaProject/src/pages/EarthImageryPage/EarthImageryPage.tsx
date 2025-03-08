import { Map, FavoriteLocations } from "@components/index";
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

        <section className="satellite-image-section">
          <h2 id="satellite-image-heading">
            🛰️Satellite image for chosen location🚀
          </h2>
          <div className="image-wrapper">
            {imageUrl && <img src={imageUrl} alt="satellite image" />}
          </div>
        </section>

        <FavoriteLocations />
      </section>
    </motion.div>
  );
};

import { ApodImage } from "../../components";
import { PreviousApodImages } from "../../components";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const pageAnimations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const AstronomyPage = () => {
  return (
    <motion.div
      variants={pageAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <div className="astronomy-page">
        <ApodImage />
        <PreviousApodImages />
        <ToastContainer />
      </div>
    </motion.div>
  );
};

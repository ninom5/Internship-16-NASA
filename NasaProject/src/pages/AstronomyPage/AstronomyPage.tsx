import { ApodImage } from "../../components";
import PreviousApodImages from "../../components/PreviousApodImages/PreviousApodImages";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useApod } from "../../hooks";
import { LoadingAstronaut } from "../../components/LoadingAstronaut/LoadingAstronaut";

const pageAnimations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const AstronomyPage = () => {
  const { data, loading, error, fetchMore, hasMore } = useApod();
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
        <PreviousApodImages
          data={data}
          loading={loading}
          isLoading={loading}
          error={error}
          fetchMore={fetchMore}
          hasMore={hasMore}
          LoadingComponent={LoadingAstronaut}
        />
        <ToastContainer />
      </div>
    </motion.div>
  );
};

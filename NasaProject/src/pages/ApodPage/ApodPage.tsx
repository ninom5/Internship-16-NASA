import {
  ApodImage,
  PreviousApodImages,
  LoadingAstronaut,
} from "@components/index";
import { useApod } from "@hooks/index";
import { fadeInUpAnimation } from "@constants/Animations";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

export const ApodPage = () => {
  const { data, loading, error, fetchMore, hasMore } = useApod();
  return (
    <motion.div
      variants={fadeInUpAnimation}
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

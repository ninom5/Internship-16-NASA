import { useFetchMarsRovers } from "@hooks/index";
import { slideInFromLeftAnimation } from "@constants/Animations";
import { MarsGalleryImage, PaginationButtons } from "@components/index";
import { motion } from "framer-motion";

export const MarsRoverPage = () => {
  const { photos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers();

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;

  return (
    <motion.div
      variants={slideInFromLeftAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="rovers-gallery">
        <h1 className="rovers-heading">Mars Rover Photos</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 gallery">
          {photos.map((img) => (
            <MarsGalleryImage key={img.id} img={img} />
          ))}
        </div>

        <PaginationButtons
          currentPage={currentPage}
          loading={loading}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </section>
    </motion.div>
  );
};

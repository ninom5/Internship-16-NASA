import { useFetchMarsRovers } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const MarsRoverPage = () => {
  const { photos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers();
  const navigate = useNavigate();
  const handleOnClickImage = (id: number) => {
    navigate(`/marsRoverPhotos/${id}`);
  };

  const marsRoverPageAnimations = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.7, ease: "easeIn" } },
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;

  return (
    <motion.div
      variants={marsRoverPageAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="rovers-gallery">
        <h1 className="rovers-heading">Mars Rover Photos</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 gallery">
          {photos.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img.img_src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover"
                onClick={() => handleOnClickImage(img.id)}
              />
            </div>
          ))}
        </div>

        <div className="pages-buttons">
          <button
            onClick={prevPage}
            disabled={currentPage === 1 || loading}
            className="change-page-button"
            id="prev-button"
          >
            &laquo; Previous Page
          </button>
          <span style={{ margin: "0 15px" }}>Page {currentPage}</span>

          <button
            onClick={nextPage}
            disabled={loading}
            className="change-page-button"
          >
            Next Page &raquo;
          </button>
        </div>
      </section>
    </motion.div>
  );
};

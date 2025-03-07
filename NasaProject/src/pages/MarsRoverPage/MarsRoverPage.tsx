import { useFetchMarsRovers } from "@hooks/index";
import { slideInFromLeftAnimation } from "@constants/Animations";
import {
  MarsGallery,
  PaginationButtons,
  GallerySkeleton,
  LoadingAstronaut,
} from "@components/index";
import { motion } from "framer-motion";

export const MarsRoverPage = () => {
  const { photos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers();

  if (error) return <div>error: {error}</div>;

  return (
    <motion.div
      variants={slideInFromLeftAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main id="mars-rover-page">
        <section className="rovers-info text-center mb-8">
          <h1 className="text-3xl font-bold">Mars Rover Exploration</h1>
          <p className="text-lg text-gray-700 mt-2">
            NASA's Mars rovers capture stunning images of the Red Planet,
            helping scientists uncover its secrets. Explore the latest images
            taken by these robotic explorers!
          </p>
        </section>

        <section className="rovers-gallery">
          <h2 className="rovers-heading">Mars Rover Photos</h2>

          <MarsGallery
            photos={photos}
            isLoading={loading}
            LoadingComponent={GallerySkeleton}
          />

          <PaginationButtons
            currentPage={currentPage}
            loading={loading}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </section>

        <section className="rover-facts text-center mt-8 p-4 border-t border-gray-300">
          <h2 className="text-2xl font-semibold">Did You Know?</h2>
          <ul className="list-disc list-inside text-white-700 mt-2">
            <li>
              Perseverance landed on Mars in February 2021 to search for signs
              of ancient life.
            </li>
            <li>
              Curiosity has been exploring Mars since 2012 and has traveled over
              16 miles.
            </li>
            <li>
              Spirit and Opportunity, twin rovers, surpassed their planned
              90-day missions, lasting years!
            </li>
          </ul>
        </section>
      </main>
    </motion.div>
  );
};

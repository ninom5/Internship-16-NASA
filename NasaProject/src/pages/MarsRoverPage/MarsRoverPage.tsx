import { useFetchMarsRovers } from "@hooks/index";
import { slideInFromLeftAnimation } from "@constants/Animations";
import {
  MarsGallery,
  PaginationButtons,
  GallerySkeleton,
} from "@components/index";
import { motion } from "framer-motion";
import { useState } from "react";

export const MarsRoverPage = () => {
  const { photos, allPhotos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers();

  const [selectedCamera, setSelectedCamera] = useState("All");

  if (error) throw new Error(`Error showing mars rover gallery: ${error}`);

  const cameras = [
    "All",
    "FHAZ",
    "RHAZ",
    "MAST",
    "CHEMCAM_RMI",
    "MAHLI",
    "MARDI",
    "NAVCAM",
    "NAV_LEFT_B",
    "NAV_RIGHT_B",
  ];

  const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCamera(e.target.value);
  };

  const filteredPhotos =
    selectedCamera === "All"
      ? photos
      : photos.filter((photo) => photo.camera.name === selectedCamera);

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

          <div className="rovers-selects">
            <label htmlFor="camera-select">Select a Camera:</label>
            <select
              name="camera-select"
              id="camera-select"
              value={selectedCamera}
              onChange={handleCameraChange}
            >
              {cameras.map((camera) => (
                <option key={camera} value={camera}>
                  {camera}
                </option>
              ))}
            </select>
          </div>

          <MarsGallery
            photos={filteredPhotos}
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

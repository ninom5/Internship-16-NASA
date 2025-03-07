import { useFetchMarsRovers } from "@hooks/index";
import { slideInFromLeftAnimation } from "@constants/Animations";
import { MarsGalleryImage, PaginationButtons } from "@components/index";
import { motion } from "framer-motion";
import { useState } from "react";
import { MouseEvent, useEffect } from "react";

export const MarsRoverPage = () => {
  const [selectedRover, setSelectedRover] = useState("All");
  const [selectedCamera, setSelectedCamera] = useState("All");

  const [tempRover, setTempRover] = useState("All");
  const [tempCamera, setTempCamera] = useState("All");

  const [fetchData, setFetchData] = useState(false);

  const { photos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers(selectedRover, selectedCamera, fetchData);

  const handleFilter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedRover(tempRover);
    setSelectedCamera(tempCamera);
    setFetchData(true);
  };

  useEffect(() => {
    if (fetchData) {
      setFetchData(false);
    }
  }, [fetchData]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;

  const rovers = ["All", "Curiosity", "Opportunity", "Spirit"];
  const cameras = [
    "All",
    "FHAZ",
    "RHAZ",
    "MAST",
    "CHEMCAM",
    "MAHLI",
    "MARDI",
    "NAVCAM",
    "PANCAM",
    "MINITES",
  ];

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
          <div className="rovers-selects items-center gap-4 p-4">
            <label htmlFor="rover-select">Select a Rover:</label>
            <select
              name="rover-select"
              id="rover-select"
              value={tempRover}
              onChange={(e) => setTempRover(e.target.value)}
            >
              {rovers.map((rover) => (
                <option key={rover} value={rover}>
                  {rover}
                </option>
              ))}
            </select>

            <label htmlFor="camera-select">Select a Camera:</label>
            <select
              name="camera-select"
              id="camera-select"
              value={tempCamera}
              onChange={(e) => setTempCamera(e.target.value)}
            >
              {cameras.map((camera) => (
                <option key={camera} value={camera}>
                  {camera}
                </option>
              ))}
            </select>

            <button
              onClick={handleFilter}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Filter
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 p-4 gallery">
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

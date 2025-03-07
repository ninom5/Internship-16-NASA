import React from "react";
import videoPath from "../../assets/images/Untitled design.mp4";
import astronaut from "../../assets/images/—Pngtree—cute astronaut looking up star_6225035.png";
import basketballAstronaut from "../../assets/images/—Pngtree—astronaut_1060639.png";
import astronautRidingComet from "../../assets/images/—Pngtree—cute astronaut and falling meteorite_6225030.png";
import vespaAstronaut from "../../assets/images/—Pngtree—cool vintage astronaut in outer_6459098.png";
import { motion } from "framer-motion";

const notFoundAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
};

const line =
  "Oops, how did you get here? Go back before you fall into the black hole, after that there is no way back.";

export const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      variants={notFoundAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="not-found-page">
        <video autoPlay loop muted>
          <source src={videoPath} />
        </video>

        <div className="not-found-text">
          <h1>404</h1>
          <p className="falling-text">{line}</p>
        </div>

        <img
          src={basketballAstronaut}
          alt=""
          id="basketball-astronaut"
          className="astronaut"
        />
        <img src={astronaut} alt="" id="astronaut" className="astronaut" />
        <img
          src={astronautRidingComet}
          alt=""
          id="astronaut-comet"
          className="astronaut"
        />
        <img
          src={vespaAstronaut}
          alt=""
          id="vespa-astronaut"
          className="astronaut"
        />

        <button
          className="button-navigation button-home"
          onClick={() => (window.location.href = "/")}
        >
          🏠🚀 Mission Control (Home)
        </button>

        <button
          className="button-navigation button-last-location"
          onClick={() => window.history.back()}
        >
          🔙🚀 Fly to the Last Known Location (Go Back)
        </button>
      </div>
    </motion.div>
  );
};

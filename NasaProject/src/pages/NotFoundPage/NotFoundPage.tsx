import React from "react";
import { VideoBackground, Button } from "../../components";
import astronaut from "../../assets/images/—Pngtree—cute astronaut looking up star_6225035.png";
import basketballAstronaut from "../../assets/images/—Pngtree—astronaut_1060639.png";
import astronautRidingComet from "../../assets/images/—Pngtree—cute astronaut and falling meteorite_6225030.png";
import vespaAstronaut from "../../assets/images/—Pngtree—cool vintage astronaut in outer_6459098.png";
import { motion } from "framer-motion";
import { bounceAnimation } from "../../constants/Animations";

const line =
  "Oops, how did you get here? Go back before you fall into the black hole, after that there is no way back.";

export const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      variants={bounceAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="not-found-page">
        <VideoBackground />

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

        <Button
          onClick={() => (window.location.href = "/")}
          label="Mission Control (Home)"
          emoji="🏠🚀"
          className="button-navigation button-home"
        />

        <Button
          onClick={() => window.history.back()}
          label="Fly to the Last Known Location (Go Back)"
          emoji="🔙🚀"
          className="button-navigation button-last-location"
        />
      </div>
    </motion.div>
  );
};

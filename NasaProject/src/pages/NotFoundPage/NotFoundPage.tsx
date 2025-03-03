import React from "react";
import videoPath from "../../assets/images/Untitled design.mp4";

const addSpansToText = (text: string) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className="falling-letter"
      style={{ "--n": index + 1 } as React.CSSProperties}
    >
      {letter}
    </span>
  ));
};

const line =
  "Oops, how did you get here? Go back before you fall in the black hole, after that there is no way back";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <video autoPlay loop muted>
        <source src={videoPath} />
      </video>

      <div className="not-found-text">
        <p className="falling-text">{addSpansToText(line)}</p>
      </div>
    </div>
  );
};

import { ApodImage } from "../../components";
import { PreviousApodImages } from "../../components";

export const AstronomyPage = () => {
  return (
    <div className="astronomy-page">
      <ApodImage />
      <PreviousApodImages />
    </div>
  );
};

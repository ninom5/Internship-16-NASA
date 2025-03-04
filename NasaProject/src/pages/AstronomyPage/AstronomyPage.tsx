import { ApodImage } from "../../components";
import { PreviousApodImages } from "../../components";
import { ToastContainer } from "react-toastify";

export const AstronomyPage = () => {
  return (
    <div className="astronomy-page">
      <ApodImage />
      <PreviousApodImages />
      <ToastContainer />
    </div>
  );
};

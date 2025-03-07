import { useNavigate } from "react-router-dom";
import { RoverPhoto } from "@contexts/index";
import { withLoading } from "@hoc/withLoading";

const MarsGallery = ({ photos }: { photos: RoverPhoto[] }) => {
  const navigate = useNavigate();
  const handleOnClickImage = (id: number) => {
    navigate(`/marsRoverPhotos/${id}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 p-4 gallery">
      {photos.map((img: RoverPhoto) => (
        <div
          key={img.id}
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer scale-95 hover:scale-100 transform transition duration-300 ease-in-out"
        >
          <img
            src={img.img_src}
            alt={`Mars rover photo captured: ${img.earth_date}`}
            className="w-full h-auto object-cover"
            onClick={() => handleOnClickImage(img.id)}
          />
        </div>
      ))}
    </div>
  );
};
export default withLoading(MarsGallery);

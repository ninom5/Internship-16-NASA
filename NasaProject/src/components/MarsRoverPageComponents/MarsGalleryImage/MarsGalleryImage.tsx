import { useNavigate } from "react-router-dom";

export const MarsGalleryImage = ({ img }: { img: any }) => {
  const navigate = useNavigate();
  const handleOnClickImage = (id: number) => {
    navigate(`/marsRoverPhotos/${id}`);
  };
  return (
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
  );
};

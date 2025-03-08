import { useParams } from "react-router-dom";
import { MarsDetailsCard } from "@components/index";
import { useMarsRovers } from "@hooks/index";

export const MarsDetailsPage = () => {
  const { imgId } = useParams<Record<string | string, undefined>>();
  const { allPhotos, loading, error } = useMarsRovers();

  if (loading) return <div>loading...</div>;

  if (error)
    throw new Error(`Error showing mars rover photo details: ${error}`);

  if (!allPhotos || allPhotos.length === 0) return <div>all photos empty</div>;

  const image = allPhotos.find((photo) => {
    return Number(photo.id) === Number(imgId);
  });

  if (!image) return <div>problem with finding image</div>;

  return (
    <section className="mars-details-page">
      <MarsDetailsCard image={image} />
    </section>
  );
};

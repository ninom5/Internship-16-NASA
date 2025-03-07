import { useParams } from "react-router-dom";
import { useMarsRovers } from "@hooks/index";
import { MarsDetailsCard } from "@components/index";

export const MarsDetailsPage = () => {
  const { imgId } = useParams<Record<string | string, undefined>>();

  const { photos, loading, error } = useMarsRovers();

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;
  if (!photos || photos.length === 0) return <div>all photos empty</div>;

  const image = photos.find((photo) => photo.id === Number(imgId));
  if (!image) return <div>problem with finding image</div>;

  return (
    <section className="mars-details-page">
      <MarsDetailsCard image={image} />
    </section>
  );
};

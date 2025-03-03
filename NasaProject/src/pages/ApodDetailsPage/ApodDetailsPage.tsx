import { useParams } from "react-router-dom";
import { useApod } from "../../hooks";
import { ApodDetails } from "../../components";

export const ApodDetailsPage = () => {
  const { data, loading, error } = useApod();
  const { routeParameter } = useParams<Record<string, string | undefined>>();

  if (loading) return <h1>loading...</h1>;

  if (error) return <h2>error: {error}</h2>;

  if (!data || data.length === 0) return <p>no data</p>;

  const selectedImage = data.find((img) => img.date === routeParameter);
  console.log(selectedImage?.title);

  return (
    <div className="apod-details-page">
      {selectedImage ? (
        <ApodDetails selectedImage={selectedImage} />
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
};

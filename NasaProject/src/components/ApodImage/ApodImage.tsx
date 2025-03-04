import { useApod } from "../../hooks";

export const ApodImage: React.FC = () => {
  const { data, loading, error } = useApod();
  const currentDate = new Date().toISOString().split("T")[0];

  if (loading) return <div>loading</div>;

  if (error) return <div>error: {error}</div>;

  const todayImg = data.find((img) => img.date === currentDate);

  return (
    <section className="apod-section">
      <h1>APOD: Astronomy Picture of the Day</h1>
      {todayImg && (
        <div className="image-container">
          <img
            src={todayImg.mediaUrl ?? undefined}
            alt="Astronomy picture of the day"
            id="image-of-the-day"
          />
        </div>
      )}
    </section>
  );
};

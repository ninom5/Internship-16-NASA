import { useApod } from "../../hooks/useApod";

export const ApodImage: React.FC = () => {
  const { data, loading, error } = useApod();

  if (loading) return <div>loading</div>;

  if (error) return <div>error: {error}</div>;

  return (
    <div>
      <h1>APOD: Astronomy Pictures of the Last 20 Days</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.date}</h2>
          {item.mediaType === "image" && item.mediaUrl && (
            <img
              src={item.mediaUrl}
              alt={`Astronomy Picture of the Day - ${item.date}`}
              style={{ width: "100%", maxWidth: "600px" }}
            />
          )}
          {item.mediaType === "video" && item.mediaUrl && (
            <div>
              <p>{item.description}</p>
              <a href={item.mediaUrl} target="_blank" rel="noopener noreferrer">
                Watch the video or interact with the content here
              </a>
            </div>
          )}
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

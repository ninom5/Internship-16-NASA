import { useApod } from "../../hooks";

export const PreviousApodImages = () => {
  const { data, loading, error } = useApod();

  if (loading) return <h2>loading...</h2>;

  if (error) return <h3>Error: {error}</h3>;

  if (!data || data.length === 0) return <h3>No data ??</h3>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h2>{item.date}</h2>

          {item.mediaType === "image" ? (
            <img src={item.mediaUrl ?? undefined} alt={item.title} />
          ) : item.mediaUrl?.includes("youtube.com") ? (
            <iframe
              width="560"
              height="315"
              src={item.mediaUrl
                .replace("watch?v=", "embed/")
                .replace("youtube.com", "youtube-nocookie.com")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.title}
            ></iframe>
          ) : item.mediaUrl?.endsWith(".html") ? (
            <iframe src={item.mediaUrl} width="100%" height="500px"></iframe>
          ) : (
            <video controls width="560">
              <source src={item.mediaUrl ?? undefined} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

{
  /* {data.map((item, index) => (
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
      ))} */
}

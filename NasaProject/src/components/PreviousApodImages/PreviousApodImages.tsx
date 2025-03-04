import { useApod } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const PreviousApodImages = () => {
  const { data, loading, error } = useApod();
  const navigate = useNavigate();

  const handleOnClickImage = ({ date }: { date: string }) => {
    navigate(`/astronomy/${date}`);
  };

  if (loading) return <h2>loading...</h2>;

  if (error) return <h3>Error: {error}</h3>;

  if (!data || data.length === 0) return <h3>No data ??</h3>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" id="gallery">
      {data.map((item, index) => {
        if (index % 5 === 0) {
          return (
            <div key={index} className="grid gap-4">
              {data.slice(index, index + 5).map((subItem, subIndex) => (
                <div key={subIndex}>
                  {subItem.mediaType === "image" ? (
                    <div>
                      <img
                        src={subItem.mediaUrl ?? undefined}
                        alt={subItem.title}
                        onClick={() =>
                          handleOnClickImage({ date: subItem.date })
                        }
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                      />
                    </div>
                  ) : subItem.mediaUrl?.includes("youtube.com") ? (
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src={subItem.mediaUrl
                          .replace("watch?v=", "embed/")
                          .replace("youtube.com", "youtube-nocookie.com")}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={subItem.title}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  ) : subItem.mediaUrl?.endsWith(".html") ? (
                    <iframe
                      src={subItem.mediaUrl}
                      width="100%"
                      height="500px"
                    ></iframe>
                  ) : (
                    <video
                      controls
                      width="560"
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    >
                      <source
                        src={subItem.mediaUrl ?? undefined}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
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

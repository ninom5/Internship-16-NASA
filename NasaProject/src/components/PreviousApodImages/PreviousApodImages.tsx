import { useApod } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const PreviousApodImages = () => {
  const { data, loading, error, fetchMore, hasMore } = useApod();
  const navigate = useNavigate();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastImageRef = useRef<HTMLDivElement | null>(null);

  const handleOnClickImage = ({ date }: { date: string }) => {
    navigate(`/astronomy/${date}`);
  };

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMore();
        }
      },
      { threshold: 1.0 }
    );

    if (lastImageRef.current) observer.current.observe(lastImageRef.current);
  }, [loading, hasMore]);

  if (error) return <h3>Error: {error}</h3>;
  if (!data || data.length === 0) return <h3>No data ??</h3>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" id="gallery">
      {data.map((item, index) => {
        const isLastBatch = index === data.length - (data.length % 5 || 5);

        if (index % 5 === 0) {
          return (
            <div
              key={index}
              className="grid gap-4"
              ref={isLastBatch ? lastImageRef : null}
            >
              {data.slice(index, index + 5).map((subItem, subIndex) => (
                <div key={subIndex} className="img-div">
                  {subItem.mediaType === "image" ? (
                    <div className="img-div">
                      <img
                        src={subItem.hdurl ?? undefined}
                        alt={subItem.title}
                        onClick={() =>
                          handleOnClickImage({ date: subItem.date })
                        }
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                      />
                    </div>
                  ) : subItem.mediaUrl?.endsWith(".html") ? (
                    <div>
                      <a href={subItem.mediaUrl} target="_blank">
                        Click on link to see interactive image on page
                      </a>
                    </div>
                  ) : (
                    <div className="img-div">
                      <img
                        src={subItem.thumbnail_url ?? undefined}
                        alt={subItem.title}
                        onClick={() =>
                          handleOnClickImage({ date: subItem.date })
                        }
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
      {loading && <h2>Loading more...</h2>}
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { withLoading } from "@hoc/withLoading";
import { PreviousApodImagesProps } from "types";

const PreviousApodImages = ({
  data,
  loading,
  error,
  fetchMore,
  hasMore,
}: PreviousApodImagesProps) => {
  const navigate = useNavigate();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastImageRef = useRef<HTMLDivElement | null>(null);

  const handleOnClickImage = ({ date }: { date: string }) => {
    navigate(`/astronomy/${date}`);
  };

  useEffect(() => {
    if (loading || !hasMore) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) fetchMore();
      },
      { threshold: 1.0 }
    );

    if (lastImageRef.current) observer.current.observe(lastImageRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, data?.length]);

  if (error || !data?.length)
    return <h3>{error ? `Error: ${error}` : "No data available"}</h3>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" id="gallery">
      {data.map((item, index) => {
        const isLastBatch = index === data.length - (data.length % 5 || 5);
        const isLastItemInBatch = index % 5 === 4 || index === data.length - 1;

        if (index % 5 === 0) {
          return (
            <div
              key={item.date}
              className="grid gap-4"
              ref={isLastBatch && isLastItemInBatch ? lastImageRef : null}
            >
              {data.slice(index, index + 5).map((subItem, subIndex) => (
                <div
                  key={subItem.date}
                  className="img-div"
                  ref={
                    isLastBatch &&
                    subIndex === data.slice(index, index + 5).length - 1
                      ? lastImageRef
                      : null
                  }
                >
                  {subItem.mediaType === "image" ? (
                    <img
                      src={subItem.hdurl ?? undefined}
                      alt={subItem.title}
                      onClick={() => handleOnClickImage({ date: subItem.date })}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  ) : subItem.mediaUrl?.endsWith(".html") ? (
                    <a href={subItem.mediaUrl} target="_blank">
                      Click here to view interactive content
                    </a>
                  ) : (
                    <img
                      src={subItem.thumbnail_url ?? undefined}
                      alt={subItem.title}
                      onClick={() => handleOnClickImage({ date: subItem.date })}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
      {loading && <h2>Loading more...</h2>}
      {!hasMore && !loading && <h2>No more data available</h2>}
    </div>
  );
  /* s ovin observer uvik radi /
  /*return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4" id="gallery">
      {data.map((item, index) => {
        const isLastItem = index === data.length - 1;

        return (
          <div
            key={item.date}
            className="grid gap-4"
            ref={isLastItem ? lastImageRef : null}
          >
            {data.slice(index, index + 1).map((subItem) => (
              <div key={subItem.date} className="img-div">
                {subItem.mediaType === "image" ? (
                  <img
                    src={subItem.hdurl ?? undefined}
                    alt={subItem.title}
                    onClick={() => handleOnClickImage({ date: subItem.date })}
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                  />
                ) : subItem.mediaUrl?.endsWith(".html") ? (
                  <a href={subItem.mediaUrl} target="_blank">
                    Click here to view interactive content
                  </a>
                ) : (
                  <img
                    src={subItem.thumbnail_url ?? undefined}
                    alt={subItem.title}
                    onClick={() => handleOnClickImage({ date: subItem.date })}
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                  />
                )}
              </div>
            ))}
          </div>
        );
      })}
      {loading && <h2>Loading more...</h2>}
      {!hasMore && !loading && <h2>No more data available</h2>}
    </div>
  );
*/
};

export default withLoading(PreviousApodImages);

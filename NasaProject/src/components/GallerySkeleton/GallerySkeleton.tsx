export const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-15 p-4">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="w-80 h-80 bg-gray-300 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

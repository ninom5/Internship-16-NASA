import videoPath from "@assets/images/Untitled design.mp4";

export const VideoBackground: React.FC = () => {
  return (
    <video autoPlay loop muted>
      <source src={videoPath} />
    </video>
  );
};

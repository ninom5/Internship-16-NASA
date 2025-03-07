import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { RoverPhoto } from "@contexts/index";

export const MarsDetailsCard = ({ image }: { image: RoverPhoto }) => {
  return (
    <Card className="mars-rover-card">
      <CardMedia
        component="img"
        image={image?.img_src}
        alt={`Photo taken by ${image?.rover.name}`}
        className="mars-rover-card__image"
      />
      <CardContent className="mars-rover-card__content">
        <Typography variant="h5" gutterBottom>
          Mars Rover: <i>{image?.rover.name}</i>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This rover was launched on {image?.rover.launch_date} and successfully
          landed on Mars on {image?.rover.landing_date}. Currently, its mission
          status is <strong>{image?.rover.status}</strong>.
        </Typography>

        <h3 id="camera-info">Camera Information:</h3>
        <Typography variant="body2" color="text.secondary">
          The image was captured using the <strong>{image?.camera.name}</strong>{" "}
          ({image?.camera.full_name}). This camera is designed to capture
          high-resolution images of the Martian surface.
        </Typography>

        <br />

        <Typography variant="body2" color="text.secondary">
          The photo was taken on Mars on <strong>{image?.earth_date}</strong>,
          which corresponds to Sol <strong>{image?.sol}</strong>—the number of
          Martian days since the rover landed.
        </Typography>
      </CardContent>
    </Card>
  );
};

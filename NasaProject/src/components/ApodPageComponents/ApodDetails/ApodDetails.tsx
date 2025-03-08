import { Box, Typography } from "@mui/material";
import { SelectedImage } from "types";

export const ApodDetails = ({
  selectedImage,
}: {
  selectedImage: SelectedImage;
}) => {
  return (
    <Box className="apod-details-box">
      <img
        className="apod-details-img"
        src={selectedImage?.mediaUrl ?? undefined}
        alt="Image description"
      />
      <Box className="apod-details-box-text">
        <Typography variant="h3" gutterBottom>
          {selectedImage?.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {selectedImage?.description}
        </Typography>
        <Typography id="apod-date">
          Image taken: {selectedImage?.date}
        </Typography>
      </Box>
    </Box>
  );
};

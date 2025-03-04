import { Box, Typography } from "@mui/material";

interface SelectedImage {
  title: string;
  mediaUrl: string | null;
  date: string;
  description: string;
  mediaType: string;
}

export const ApodDetails = ({
  selectedImage,
}: {
  selectedImage: SelectedImage;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <img
        src={selectedImage?.mediaUrl ?? undefined}
        alt="Image description"
        style={{
          width: "70%",
          height: "auto",
          maxHeight: "90vh",
          objectFit: "contain",
        }}
      />
      <Box sx={{ padding: 4, maxWidth: 800 }}>
        <Typography variant="h3" gutterBottom>
          {selectedImage?.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {selectedImage?.description}
        </Typography>
        <Typography>Image taken: {selectedImage?.date}</Typography>
      </Box>
    </Box>
  );
};

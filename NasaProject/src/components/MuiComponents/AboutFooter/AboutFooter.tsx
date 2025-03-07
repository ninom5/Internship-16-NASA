import { Typography, Box } from "@mui/material";

export const AboutFooter = () => {
  return (
    <Box marginTop={6} textAlign="center">
      <Typography variant="h6" className="about-page-footer">
        The web application is built with <strong>React</strong>,{" "}
        <strong>TypeScript</strong>, <strong>Three.js</strong> for interactive
        earth on home page, and <strong>NASA Open APIs</strong>.
      </Typography>
      <Typography variant="body1" className="about-page-footer" marginTop={2}>
        It features a responsive design, animations, and an intuitive user
        interface to make space exploration fun and engaging.
      </Typography>
    </Box>
  );
};

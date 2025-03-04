import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import sittingAstronaut from "../../assets/images/—Pngtree—astronaut cute character_7253137.png";

export const AboutPage = () => {
  const links = ["/astronomy", "/marsRoverPhotos", "neo", "earthImag", "/"];
  return (
    <section className="about-page">
      <div className="about-page__heading">
        <h3>
          Have you ever dreamt about exploring the Universe? You've came to
          right place
        </h3>
        <h2>NASA Explorer - Discover the mighty Universe!</h2>
        <p>
          Welcome to NASA Explorer, an interactive space-based web application.
          That lets you explore and see wonders of the cosmos using real NASA
          images and data. Discover fascinating facts, see incredible images and
          track objects near the earth. Join us as we push the boundaries of
          space exploration and unravel the mysteries of the universe, one click
          at a time.
        </p>
      </div>

      <Container sx={{ marginTop: 15 }}>
        <Box textAlign="center" marginBottom={8}>
          <img
            src={sittingAstronaut}
            alt="astronaut image"
            id="sitting-astronaut"
          />
          <Typography variant="h3" fontWeight="bold" color="#9c4dcc">
            Start your space adventure today! ⭐ 🔭
          </Typography>
        </Box>

        <Grid2 container spacing={5} justifyContent="center">
          {[
            {
              title: "APOD (Astronomy Picture of the Day) Gallery",
              description: `View NASA's Astronomy Picture of the Day; also, you can see older images in the gallery so you don't miss anything. 
              You can also click on each image to find out more interesting details about space and that particular image.`,
            },
            {
              title: "Mars Rover Photos",
              description: `Browse the latest images from NASA's Mars rovers. You can filter images by rovers or by camera. 
              Clicking on each image, you can see a bigger image and more details about the photo.`,
            },
            {
              title: "NEO (Near Earth Objects) Tracker",
              description:
                "Track asteroids and other objects near Earth using interactive charts. That could hit us one day, LOL.",
            },
            {
              title: "Earth Imagery",
              description:
                "Explore satellite images of any location on Earth using interactive maps. You can also save your favorite locations.",
            },
            {
              title: "Interactive 3D Earth Experience",
              description: `On the home page, you can spin the Earth around interactively and view it from different perspectives, and examine Mars up close.
               And go ahead and click on Mars ;).`,
            },
          ].map((feature, index) => (
            <Grid2 key={index}>
              <Link to={links[index]}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="#4db6ac">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>

        <Box marginTop={6} textAlign="center">
          <Typography variant="h6" color="textSecondary">
            The web application is built with <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Three.js</strong> for
            interactive earth on home page, and <strong>NASA Open APIs</strong>.
          </Typography>
          <Typography variant="body1" color="textSecondary" marginTop={2}>
            It features a responsive design, animations, and an intuitive user
            interface to make space exploration fun and engaging.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

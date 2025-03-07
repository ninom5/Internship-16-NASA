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
import { AboutFooter } from "../";
import { features } from "../../constants/Features";

export const AboutSection = () => {
  const links = ["/astronomy", "/marsRoverPhotos", "neo", "earthImag", "/"];
  return (
    <section className="about-section">
      <div className="about-section__heading">
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
          <Typography
            variant="h3"
            fontWeight="bold"
            id="section-cards-pages-heading"
          >
            Start your space adventure today! ⭐ 🔭
          </Typography>
        </Box>

        <Grid2 container spacing={5} justifyContent="center">
          {features.map(
            (
              feature: { title: string; description: string },
              index: number
            ) => (
              <Grid2 key={feature.title}>
                <Link to={links[index]}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        id="section-card-pages-title"
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid2>
            )
          )}
        </Grid2>

        <AboutFooter />
      </Container>
    </section>
  );
};

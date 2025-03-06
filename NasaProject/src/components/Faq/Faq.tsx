import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Faq = () => {
  return (
    <div className="bg-gray-900 p-6 mt-8 rounded-lg" id="faq-section">
      <h3 className="text-white text-xl font-semibold mb-4">
        Frequently Asked Questions
      </h3>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-black font-medium faq-question">
            What is a NEO?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400">
            A "Near-Earth Object" (NEO) is an asteroid or comet that approaches
            the Earth's orbit. NEOs can be classified as Potentially Hazardous
            Asteroids (PHAs) based on their size and proximity to Earth.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-black font-medium faq-question">
            What is a Sentry Object?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400">
            A "Sentry object" is a Near-Earth Object (NEO) that is actively
            monitored by NASA's Sentry system for potential impact risk.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-black font-medium faq-question">
            What is a Sentry?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400">
            Sentry is a highly automated collision monitoring system that
            continually scans the most current asteroid catalog for
            possibilities of future impact with Earth over the next 100 years.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-black font-medium faq-question">
            What is a Potentially Hazardous Asteroid?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400">
            A "Potentially Hazardous Asteroid" (PHA) is defined as any NEO with
            a size large enough to cause significant damage.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-black font-medium faq-question">
            What is AU?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400">
            AU stands for the astronomical unit, which is the average distance
            between the Earth and the Sun. It is approximately 93 million miles
            or almost 150 million kilometers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add more questions here */}
    </div>
  );
};

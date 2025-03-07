import { Box, keyframes } from "@mui/material";

const grow = keyframes`
  0% { height: 20%; }
  50% { height: 100%; }
  100% { height: 20%; }
`;

export const HomePageLoader = () => {
  return (
    <div className="hero-loader">
      <h2 className="loading-message">
        Earth interaction animation is being loaded...
      </h2>
      <Box display="flex" gap={1} alignItems="center" height={48}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 8,
              backgroundColor: "primary.main",
              borderRadius: 1,
              animation: `${grow} 1s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>
    </div>
  );
};

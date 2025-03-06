import { Router } from "./Router.tsx";
import { ThemeProvider } from "./contexts";
import { ApodProvider } from "./contexts";
import { MarsRoverProvider } from "./contexts";
import { withErrorBoundary } from "./hoc/withErrorBoundary.tsx";

const App: React.FC = () => {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.error("Error: ", error, info);
  };

  return (
    <ThemeProvider>
      <ApodProvider>
        <MarsRoverProvider>
          <Router />
        </MarsRoverProvider>
      </ApodProvider>
    </ThemeProvider>
  );
};

export default withErrorBoundary(App);

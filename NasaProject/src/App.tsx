import { Router } from "./Router.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorBoundary/ErrorFallback.tsx";
import { ThemeProvider } from "./contexts/theme-context/ThemeProvider.tsx";
import { ApodProvider } from "./contexts/APOD-context/ApodProvider.tsx";
import { MarsRoverProvider } from "./contexts/marsrover-context/MarsRoverProvider.tsx";

const App: React.FC = () => {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.error("Error: ", error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <ThemeProvider>
        <ApodProvider>
          <MarsRoverProvider>
            <Router />
          </MarsRoverProvider>
        </ApodProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

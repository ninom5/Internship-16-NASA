import { Router } from "./Router.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components";
import { ThemeProvider } from "./contexts";
import { ApodProvider } from "./contexts";
import { MarsRoverProvider } from "./contexts";

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

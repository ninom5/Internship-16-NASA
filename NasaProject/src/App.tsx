import { Router } from "./Router.tsx";
import { ThemeProvider } from "./contexts";
import { ApodProvider } from "./contexts";
import { MarsRoverProvider } from "./contexts";
import { withErrorBoundary } from "./hoc/withErrorBoundary.tsx";

const App: React.FC = () => {
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

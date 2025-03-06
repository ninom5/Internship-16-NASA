import { Router } from "./Router.tsx";
import {
  ThemeProvider,
  ApodProvider,
  MarsRoverProvider,
  NeoProvider,
  MapLocationProvider,
} from "./contexts";
import { withErrorBoundary } from "./hoc/withErrorBoundary.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ApodProvider>
        <MarsRoverProvider>
          <NeoProvider>
            <MapLocationProvider>
              <Router />
            </MapLocationProvider>
          </NeoProvider>
        </MarsRoverProvider>
      </ApodProvider>
    </ThemeProvider>
  );
};

export default withErrorBoundary(App);

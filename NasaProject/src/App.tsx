import { Router } from "./Router.tsx";
import {
  ThemeProvider,
  ApodProvider,
  MarsRoverProvider,
  NeoProvider,
  MapLocationProvider,
  EarthImageryProvider,
} from "@contexts/index.ts";
import { withErrorBoundary } from "./hoc/withErrorBoundary.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ApodProvider>
        <MarsRoverProvider>
          <NeoProvider>
            <MapLocationProvider>
              <EarthImageryProvider>
                <Router />
              </EarthImageryProvider>
            </MapLocationProvider>
          </NeoProvider>
        </MarsRoverProvider>
      </ApodProvider>
    </ThemeProvider>
  );
};

export default withErrorBoundary(App);

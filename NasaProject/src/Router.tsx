import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import {
  ApodDetailsPage,
  ApodPage,
  HomePage,
  Layout,
  MarsRoverPage,
  NotFoundPage,
  MarsDetailsPage,
  NeoPage,
  EarthImageryPage,
} from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.ASTRONOMY} element={<ApodPage />} />
          <Route path={routes.MARS} element={<MarsRoverPage />} />
          <Route
            path={routes.ASTRONOMY_DETAILS}
            element={<ApodDetailsPage />}
          />
          <Route path={routes.MARS_DETAILS} element={<MarsDetailsPage />} />
          <Route path={routes.NEO} element={<NeoPage />} />
          <Route path={routes.EARTH_IMAGERY} element={<EarthImageryPage />} />
          <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

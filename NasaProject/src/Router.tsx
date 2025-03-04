import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import {
  ApodDetailsPage,
  AstronomyPage,
  HomePage,
  Layout,
  MarsRoverPage,
  NotFoundPage,
} from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.ASTRONOMY} element={<AstronomyPage />} />
          <Route path={routes.MARS} element={<MarsRoverPage />} />
          <Route
            path={routes.ASTRONOMY_DETAILS}
            element={<ApodDetailsPage />}
          />
          <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

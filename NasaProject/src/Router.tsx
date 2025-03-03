import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { AstronomyPage, HomePage, Layout, MarsRoverPage } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.ASTRONOMY} element={<AstronomyPage />} />
          <Route path={routes.MARS} element={<MarsRoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import { Routes } from "../types/routeType.ts";

export const routes: Routes = {
  HOME: "/",
  ASTRONOMY: "/astronomy",
  NEO: "/neo",
  MARS: "/marsRoverPhotos",
  ASTRONOMY_DETAILS: "/astronomy/:routeParameter",
  MARS_DETAILS: "/marsRoverPhotos/:imgId",
  EARTH_IMAGERY: "/earthImagery",
  NOT_FOUND: "*",
};

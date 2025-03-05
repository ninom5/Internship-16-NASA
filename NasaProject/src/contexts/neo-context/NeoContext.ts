import { createContext } from "react";
import { NeoContextType } from "../../types/neoContextType";

export const NeoContext = createContext<NeoContextType>({
  data: {
    links: {
      next: "",
      prev: "",
      self: "",
    },
    element_count: 0,
    near_earth_objects: {
      "": [
        {
          links: {
            self: "",
          },
          id: 0,
          neo_reference_id: "",
          name: "",
          nasa_jpl_url: "",
          absolute_magnitude_h: 0,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0,
              estimated_diameter_max: 0,
            },
            meters: {
              estimated_diameter_min: 0,
              estimated_diameter_max: 0,
            },
            miles: {
              estimated_diameter_min: 0,
              estimated_diameter_max: 0,
            },
            feet: {
              estimated_diameter_min: 0,
              estimated_diameter_max: 0,
            },
          },
          is_potentially_hazardous_asteroid: false,
          close_approach_data: [
            {
              close_approach_date: "",
              close_approach_date_full: "",
              epoch_date_close_approach: 0,
              relative_velocity: {
                kilometers_per_second: "",
                kilometers_per_hour: "",
                miles_per_hour: "",
              },
              miss_distance: {
                astronomical: "",
                lunar: "",
                kilometers: "",
                miles: "",
              },
              orbiting_body: "",
            },
          ],
          is_sentry_object: false,
        },
      ],
    },
  },
  loading: true,
  error: null,
});

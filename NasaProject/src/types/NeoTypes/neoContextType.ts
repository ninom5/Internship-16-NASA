export interface Links {
  next: string;
  prev: string;
  self: string;
}

export interface Kilometers {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Meters {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Miles {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface EstimatedDiameter {
  kilometers: Kilometers;
  meters: Meters;
  miles: Miles;
  feet: Feet;
}

export interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export default interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: string;
}

export interface Date {
  links: Links;
  id: number;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}

export interface NearEarthObject {
  links: {
    self: string;
  };
  id: number;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}

export interface NearEarthObjects {
  [date: string]: NearEarthObject[];
}

export interface NeoData {
  links: Links;
  element_count: number;
  near_earth_objects: NearEarthObjects;
}

export interface NeoContextType {
  data: NeoData;
  loading: boolean;
  error: string | null;
}

interface Resource {
  dataset: string;
  planet: string;
}

export interface EarthImageryData {
  date: Date | null;
  id: string;
  resource: Resource;
  service_version: string;
  url: string;
}

export interface EarthImageryContextType {
  imageUrl: string;
  loading: boolean;
  error: string | null;
}

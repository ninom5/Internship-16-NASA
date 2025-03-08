export interface ApodData {
  mediaUrl: string | null;
  description: string;
  date: string;
  mediaType: string;
  title: string;
  hdurl: string;
  thumbnail_url?: string | null;
}

export interface SelectedImage {
  title: string;
  mediaUrl: string | null;
  date: string;
  description: string;
  mediaType: string;
}

export interface PreviousApodImagesProps {
  data: ApodData[] | null;
  loading: boolean;
  error: string | null;
  fetchMore: () => void;
  hasMore: boolean;
}

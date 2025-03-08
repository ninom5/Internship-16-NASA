export interface ButtonProps {
  onClick: () => void;
  label: string;
  emoji: string;
  className?: string;
}

export interface PaginationButtonsProps {
  currentPage: number;
  loading: boolean;
  nextPage: () => void;
  prevPage: () => void;
}

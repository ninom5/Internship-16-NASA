import React from "react";

interface PaginationButtonsProps {
  currentPage: number;
  loading: boolean;
  nextPage: () => void;
  prevPage: () => void;
}

export const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage,
  loading,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="pages-buttons">
      <button
        onClick={prevPage}
        disabled={currentPage === 1 || loading}
        className="change-page-button"
        id="prev-button"
      >
        &laquo; Previous Page
      </button>
      <span style={{ margin: "0 15px" }}>Page {currentPage}</span>
      <button
        onClick={nextPage}
        disabled={loading}
        className="change-page-button"
      >
        Next Page &raquo;
      </button>
    </div>
  );
};

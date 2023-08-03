import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [pages] = useState(Array.from({ length: totalPages }, (_, index) => index + 1));

  const handlePageChange = (page) => {
    onPageChange(page);
    window.scrollTo(0, 0); // Hace scroll hacia arriba al cambiar de página
  };

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          <span className="page-link">{page}</span>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;

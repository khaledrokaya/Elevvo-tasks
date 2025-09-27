import { Fragment } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = totalPages <= 1 ? [1] : getVisiblePages();

  return (
    <nav className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 text-sm cursor-pointer font-medium rounded-lg transition-colors inline-flex items-center ${currentPage === 1
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
      >
        <i className="w-4 h-4 fas fa-chevron-left"></i>
      </button>
      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => (
          <Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-500">
                <i className="fas fa-ellipsis-h"></i>
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 text-sm cursor-pointer font-medium rounded-lg transition-colors ${currentPage === page
                  ? 'pagination-active'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                {page}
              </button>
            )}
          </Fragment>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 cursor-pointer text-sm font-medium rounded-lg transition-colors inline-flex items-center ${currentPage === totalPages
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
      >
        <i className="w-4 h-4 fas fa-chevron-right"></i>
      </button>
    </nav>
  );
}

export default Pagination;
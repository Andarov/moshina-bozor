import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${
          currentPage === 1
            ? "bg-gray-200 text-gray-700"
            : "bg-teal-500 text-white"
        }  font-semibold rounded-md px-4 py-2 mx-1`}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`${
            currentPage === index + 1
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          } font-semibold rounded-md px-4 py-2 mx-1`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-700"
            : "bg-teal-500 text-white"
        } font-semibold rounded-md px-4 py-2 mx-1`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

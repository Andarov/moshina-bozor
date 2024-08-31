import React from "react";

// components
import Arrow from "./Arrow";

// antd
import { Pagination } from "antd";

// css
import "../css/antd/pagination.css";

const DynamicPagination = ({
  totalPages = 1,
  className = "",
  defaultPage = 1,
  onChange = () => false,
}) => {
  return (
    <div className={"flex items-center justify-center w-full " + className}>
      <Pagination
        pageSize={1}
        role="pagination"
        total={totalPages}
        onChange={onChange}
        aria-label="pagination"
        showSizeChanger={false}
        defaultCurrent={defaultPage}
        // btn prev
        prevIcon={
          <button className="flex items-center justify-center size-full rounded-md transition-colors hover:bg-gray-100 disabled:opacity-50">
            <Arrow size={20} fill="#737373" />
          </button>
        }
        // btn next
        nextIcon={
          <button className="flex items-center justify-center size-full rounded-md transition-colors hover:bg-gray-100 disabled:opacity-50">
            <Arrow direction="right" size={20} fill="#737373" />
          </button>
        }
      />
    </div>
  );
};

export default DynamicPagination;

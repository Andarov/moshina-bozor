import React from "react";

const DottedLabel = ({
  children1,
  children2,
  className = "",
  lineClassName = "",
}) => {
  return (
    <div className={"flex items-center gap-1.5 w-full " + className}>
      {/* item 1 */}
      {children1}

      {/* dotted line */}
      <span
        className={
          "grow min-w-10 pt-2 border-b-2 border-dotted border-111/50" +
          lineClassName
        }
      ></span>

      {/* item 2 */}
      {children2}
    </div>
  );
};

export default DottedLabel;

import React, { useEffect, useRef } from "react";

// css
import "../css/animations/bding.css";

// images
import crossIcon from "../img/icon/cross-circle.svg";

const ModalFrame = ({
  children,
  className = "",
  description = "",
  title = "Modal nomi",
  onClose = () => false,
}) => {
  const modalContentRef = useRef(null);

  // close modal if the user clicks outside the modal content
  useEffect(() => {
    const handleMouseDownOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleMouseDownOutside);

    return () => {
      document.removeEventListener("mousedown", handleMouseDownOutside);
    };
  }, [onClose]);

  // handle closing the modal with the "Escape" key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="flex justify-center fixed inset-0 z-30 overflow-y-auto bg-111/40 backdrop-blur size-full"
    >
      {/* modal content container */}
      <div className="max-w-lg w-full px-2.5 my-auto animate-bding">
        <div
          ref={modalContentRef}
          className="bg-white space-y-6 p-5 rounded-xl"
          onClick={(e) => e.stopPropagation()} // prevents event bubbling to parent div
        >
          {/* header: title and close button */}
          <div className="flex items-start gap-4 justify-between">
            {/* modal Title */}
            <h2 className="text-lg">{title}</h2>

            {/* close Button */}
            <button onClick={onClose} title="Yopish" aria-label="close Modal">
              <img
                width={24}
                height={24}
                src={crossIcon}
                alt="cross icon"
                className="size-6"
              />
            </button>
          </div>

          {/* Description */}
          {description && (
            <div aria-description="true" role="textbox" className="font-medium">
              {description}
            </div>
          )}

          {/* modal body */}
          {children && (
            <div className={"space-y-5 " + className}>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalFrame;

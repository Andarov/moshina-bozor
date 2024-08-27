import React, { useState } from "react";

// notification
import { notification } from "../notification";

const CopyButton = ({
  children,
  text = "",
  className = "",
  title = "Nusxa olish",
  notificationText = "",
  loadingDuration = 3000,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = () => {
    // add loading
    setIsLoading(true);

    // copy text to clipboard
    if (!isLoading) {
      navigator.clipboard.writeText(text);

      // show notification text
      if (
        notificationText === true ||
        (typeof notificationText === "string" && notificationText.length > 0)
      ) {
        notification(notificationText ? notificationText : "Nusxa olindi");
      }
    }

    // remove loading
    setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);
  };

  return (
    <button
      title={title}
      aria-label="copy"
      disabled={isLoading}
      onClick={handleCopy}
      className={className}
    >
      {children}
    </button>
  );
};

export default CopyButton;

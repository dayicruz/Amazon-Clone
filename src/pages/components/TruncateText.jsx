import React, { useState } from "react";

const TruncateText = ({ text, maxWidth }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div
      className={`truncate ${
        showFullText
          ? "whitespace-normal"
          : "whitespace-pre-line overflow-hidden"
      }`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {showFullText ? (
        text
      ) : (
        <>
          {text.slice(0, 300)}
          {text.length > 300 && (
            <button
              className="text-blue-500 hover:underline focus:outline-none cursor-pointer text-xs ml-2"
              onClick={toggleText}
            >
              Seguir leyendo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TruncateText;

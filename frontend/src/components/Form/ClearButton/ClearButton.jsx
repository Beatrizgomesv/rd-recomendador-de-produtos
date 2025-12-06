import React from "react";

export default function ClearButton({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        text-sm
        text-rd-textSecondary dark:text-rd-textDarkSecondary
        hover:underline
        transition-colors
      "
    >
      {text}
    </button>
  );
}

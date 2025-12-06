import React from "react";

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="
        w-full
        bg-rd-blue
        dark:bg-rd-borderDark
        text-white
        font-semibold
        py-3 px-4
        rounded-md
        border border-transparent dark:border-white/10
        hover:bg-rd-blue/90 dark:hover:bg-white/10
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-rd-blue/30 dark:focus:ring-white/20
      "
    >
      {text}
    </button>
  );
}

export default SubmitButton;

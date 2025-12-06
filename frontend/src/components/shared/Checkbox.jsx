import React from "react";

export default function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        {...props}                // ✅ type vem de fora
        className="
          h-4 w-4
          accent-rd-blue
          dark:accent-rd-blueLight
          cursor-pointer
        "
      />
      <span className="text-sm text-rd-text dark:text-rd-textDark">
        {children}
      </span>
    </label>
  );
}

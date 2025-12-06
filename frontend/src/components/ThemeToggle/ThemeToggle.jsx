import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="
        p-2 rounded-md
        hover:bg-black/10 dark:hover:bg-white/10
        transition
      "
      aria-label="Alternar tema"
    >
      {isDark ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0112 21c-5.385 0-9.75-4.365-9.75-9.75
               0-4.018 2.365-7.483 5.75-9.002
               a.75.75 0 01.908.908
               7.501 7.501 0 0012.094 12.096
               a.75.75 0 01.75.998z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v2m0 16v2m10-10h-2M4 12H2
               m15.364-7.364-1.414 1.414
               M6.05 17.95l-1.414 1.414
               m12.728 0-1.414-1.414
               M6.05 6.05 4.636 4.636"
          />
        </svg>
      )}
    </button>
  );
}

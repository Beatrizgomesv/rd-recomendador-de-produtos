import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50
        transition-all duration-300
        backdrop-blur-xl
        ${
          scrolled
            ? "bg-white/70 dark:bg-rd-surfaceDark/70 shadow-md"
            : "bg-transparent"
        }
        text-rd-text dark:text-rd-textDark
      `}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-4 flex items-center">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-center">
          Recomendador de Produtos RD Station
        </h1>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

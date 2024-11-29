import { Link } from "@tanstack/react-router";
import React from "react";
import { useTheme } from "./context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src={isDark ? "/logo_dark.png" : "/logo.png"}
            alt="Klimate logo"
            className="h-12"
          />
        </Link>
        {/* <Link to="/about" className="[&.active]:font-bold">
          About
        </Link> */}

        {/* search */}
        {/* theme toggle */}
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text text-emerald-600 rotate-0 transition-all" />
          )}
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;

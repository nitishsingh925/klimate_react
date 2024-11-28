import { Link } from "@tanstack/react-router";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img src="/logo.png" alt="Klimate logo" className="h-12" />
        </Link>{" "}
        {/* <Link to="/about" className="[&.active]:font-bold">
          About
        </Link> */}
      </div>
      <div>
        {/* search */}
        {/* theme toggle */}
      </div>
      <hr />
    </header>
  );
};

export default Header;

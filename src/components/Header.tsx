import { Link } from "@tanstack/react-router";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <hr />
    </header>
  );
};

export default Header;

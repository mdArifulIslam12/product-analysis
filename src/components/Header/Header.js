import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="my-3 header text-center">
      <Link to="/home" className="btn">
        Home
      </Link>
      <Link to="/reviews" className="btn">
        Reviews
      </Link>
      <Link to="/dashboard" className="btn">
        Dashboard
      </Link>
      <Link to="/blogs" className="btn">
        Blogs
      </Link>
      <Link to="/about" className="btn">
        About
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about/details">Details</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default About;

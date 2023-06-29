import React from "react";
import { Link } from "react-router-dom";

const Nomatch = () => {
  return (
    <>
      <h2>Nothing to see here!!!!</h2>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default Nomatch;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./pages/layout";
import Nomatch from "./pages/noMatch";
import Contact from "./pages/contact";
import Details from "./pages/details";
import Cart from "./pages/cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/contact" element={<Contact />} />
            <Route path="/about/details" element={<Details />} />
          </Route>
          <Route path="/product/:productId" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

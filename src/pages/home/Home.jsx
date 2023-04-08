import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import Service from "./Service";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Team from "./Team";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <Slider />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;

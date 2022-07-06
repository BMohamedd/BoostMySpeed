import React from "react";
import NavBar from "../other/NavBar";
import Hero from "./homePageSections/Hero";
import About from "./homePageSections/About";
import Footer from "./homePageSections/Footer";
function HomePage() {
  return (
    <div>
      <NavBar />
      <div id="search-id">
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;

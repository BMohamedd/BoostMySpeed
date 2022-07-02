import React from "react";
import NavBar from "../other/NavBar";
import Hero from "./homePageSections/Hero";
import SearchArea from "./homePageSections/SearchArea";
import About from "./homePageSections/About";
import Footer from "./homePageSections/Footer";
function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SearchArea />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;

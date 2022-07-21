import React from "react";
import NavBar from "../other/NavBar";
import Hero from "./homePageSections/Hero";
import About from "./homePageSections/About";
import Footer from "./homePageSections/Footer";
import Parters from "./homePageSections/Parters";
import { Divider, Box } from "@mui/material";
import MulitpicSection from "./homePageSections/MulitpicSection";
import GetStarted1 from "./homePageSections/GetStarted/GetStarted1";
import GetStarted2 from "./homePageSections/GetStarted/GetStarted2";
import WhatTheySay from "./homePageSections/WhatTheySay/WhatTheySay";
import SpeedDialComponent from "./homePageSections/speedDial/SpeedDial";
function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <div id="search-id">
        <Hero />
      </div>
      <Divider />
      <GetStarted1 />
      <Divider />
      <Box sx={{ marginY: "5em" }}>
        <About />
      </Box>
      <Divider />
      <Box sx={{ marginY: "5em" }}>
        <MulitpicSection />
      </Box>
      <Divider />
      <WhatTheySay />
      <Divider />
      <GetStarted2 />
      <Divider />
      <Parters />
      <Footer />
      <SpeedDialComponent />
    </div>
  );
}

export default HomePage;

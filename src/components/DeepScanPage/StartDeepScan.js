import React from "react";
import NavBar from "../other/NavBar";
import SearchArea from "../frontPage/homePageSections/SearchArea";
import Footer from "../frontPage/homePageSections/Footer";
import { Stack, Box } from "@mui/material";
import About from "../frontPage/homePageSections/About";

function StartDeepScan() {
  return (
    <Stack
      sx={{ minHeight: "100vh", width: "100%" }}
      justifyContent="space-between"
      alignItems="space-between"
    >
      <NavBar />
      <Box sx={{ mt: "10em" }}>
        <SearchArea />
      </Box>
      <About />
      <Footer />
    </Stack>
  );
}

export default StartDeepScan;

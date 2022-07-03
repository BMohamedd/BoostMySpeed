import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { Box, Container, Stack, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SearchArea from "../frontPage/homePageSections/SearchArea";

function HowItWorks() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl">
        <Stack>
          {/* title */}
          <Stack
            sx={{
              borderBottom: "2px solid #9c27b0",
              width: "fit-content",
              marginTop: "10em",
            }}
            direction="row"
            alignItems="center"
            spacing={1}
            mt="1em"
            mb="3em"
          >
            <TipsAndUpdatesIcon color="secondary" />
            <Typography variant="h5">
              Here is How To use <strong>BoostMySpeed</strong>
            </Typography>
          </Stack>
          {/* tips */}
          <Typography variant="h6">
            1. Enter your link to the search area
          </Typography>
          <Typography color="gray">
            Put a link to a website you would like to run a deep scan on and hit
            enter
          </Typography>
          <Typography variant="h6">
            2. sit back and wait for the DEEP SCAN to finish
          </Typography>
          <Typography color="gray">
            This step can take between 10 - 30 seconds
          </Typography>
          <Typography variant="h6">
            3. Read our detailed Scan carefully and follow our tips to boost
            your profits today!
          </Typography>
          <Typography color="gray">Congratulations, you did it!</Typography>
          <Stack
            sx={{
              borderBottom: "2px solid #9c27b0",
              width: "fit-content",
              marginTop: "3 em",
            }}
            direction="row"
            alignItems="center"
            spacing={1}
            mt="1em"
            mb="3em"
          >
            <TipsAndUpdatesIcon color="secondary" />
            <Typography variant="h5">
              Start Your Deep Scan <strong>Now</strong>
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <SearchArea />
      <Footer />
    </Box>
  );
}

export default HowItWorks;

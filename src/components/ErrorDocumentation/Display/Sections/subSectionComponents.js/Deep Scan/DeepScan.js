import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SearchArea from "../../../../../frontPage/homePageSections/SearchArea";
import Title from "../../../../../other/title/Title";
function DeepScan() {
  return (
    <div style={{ marginTop: "1em" }}>
      <Divider />
      <Box my="2em">
        <Title
          preStrong="How does your site"
          strong="score"
          postStrong="on this metric?"
        />
        <SearchArea />
      </Box>
    </div>
  );
}

export default DeepScan;

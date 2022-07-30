import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../../../other/title/Title";

function NoSubSection({ section }) {
  return (
    <Box mt="2em">
      {section.title ? <Title preStrong={section.title} /> : null}
      {section.paragraphs.length > 0
        ? section.paragraphs.map((sectionParagraph) => {
            return (
              <Typography
                key={sectionParagraph}
                sx={{
                  fontSize: "1em",
                  marginTop: "1em",
                }}
              >
                {sectionParagraph}
              </Typography>
            );
          })
        : null}
    </Box>
  );
}

export default NoSubSection;

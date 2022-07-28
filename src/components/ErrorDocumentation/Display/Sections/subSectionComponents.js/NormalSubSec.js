import { Box, Typography } from "@mui/material";
import React from "react";

function NoSubSection({ section }) {
  return (
    <Box mt="2em" ml="1.5em">
      {section.title ? (
        <Typography sx={{ fontSize: "1.5em" }}>{section.title}</Typography>
      ) : null}
      {section.paragraphs.length > 0
        ? section.paragraphs.map((sectionParagraph) => {
            return (
              <Typography
                key={sectionParagraph}
                sx={{
                  fontSize: "1em",
                  fontWeight: "bolder",
                  marginTop: "1em",
                }}
                color="gray"
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

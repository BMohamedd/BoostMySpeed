import { Box } from "@mui/material";
import React from "react";

function SubVid({ subSec }) {
  return (
    <Box
      key={subSec.paragraphs[1]}
      sx={{
        mt: "1em",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
        }}
      >
        {" "}
        {!subSec.youtube ? (
          <video id="background-video" style={{ width: "100%" }} controls>
            <source
              src={subSec.paragraphs["0"]}
              id="mp4Source"
              type="video/mp4"
            />
            Please change you browser for a better experiance
          </video>
        ) : (
          <iframe
            allowfullscreen
            width="100%"
            height="315"
            src={subSec.paragraphs["0"]}
          ></iframe>
        )}
      </Box>
    </Box>
  );
}

export default SubVid;

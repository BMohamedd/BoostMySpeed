import { Box } from "@mui/material";
import React from "react";

function SubImg({ subSec }) {
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
        component="img"
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
        }}
        src={subSec.paragraphs[0]}
        alt={subSec.paragraphs[1]}
      ></Box>
    </Box>
  );
}

export default SubImg;

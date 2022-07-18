import { Box, Typography } from "@mui/material";
import React from "react";

function Badge() {
  return (
    <Box
      sx={{
        background: "#ff9144",
        color: "#fff",
        width: {
          xs: "80%",
          sm: "70%",
          md: "50%",
          lg: "40%",
        },
        height: "2em",
        padding: ".25em 1em",
        position: "absolute",
        top: 10,
      }}
    >
      <Typography sx={{ fontSize: "1.5em", fontWeight: "bolder" }}>
        We Recommend
      </Typography>
    </Box>
  );
}

export default Badge;

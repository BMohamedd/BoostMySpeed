import { Box, Typography } from "@mui/material";
import React from "react";

function Badge() {
  return (
    <Box
      sx={{
        background: "#ff9144",
        color: "#fff",
        width: "fit-content",
        padding: ".25em 1em",
        position: "absolute",
        top: 10,
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "1em", sm: "1.5em" }, fontWeight: "bolder" }}
      >
        We Recommend
      </Typography>
    </Box>
  );
}

export default Badge;

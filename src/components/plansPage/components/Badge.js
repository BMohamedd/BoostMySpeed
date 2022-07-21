import { Box, Typography } from "@mui/material";
import React from "react";

function Badge() {
  return (
    <Box
      sx={{
        background: "silver",
        color: "#fff",
        width: "100%",
        paddingY: ".25em",
        position: "absolute",
        top: 10,
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "1em", sm: "1.5em" }, fontWeight: "bolder" }}
        color="white"
        textAlign="center"
      >
        Recomended
      </Typography>
    </Box>
  );
}

export default Badge;

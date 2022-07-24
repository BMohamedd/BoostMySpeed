import { Box, Typography } from "@mui/material";
import React from "react";

function Badge() {
  return (
    <Box
      sx={{
        background: "silver",
        color: "#fff",
        width: "100%",
        paddingY: ".125em",
        position: "absolute",
        top: 10,
      }}
    >
      <Typography
        sx={{ fontSize: { xs: ".8em", sm: "1em" }, fontWeight: "bolder" }}
        color="white"
        textAlign="center"
      >
        Recomended
      </Typography>
    </Box>
  );
}

export default Badge;

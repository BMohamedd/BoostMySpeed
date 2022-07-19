import { Stack, Typography } from "@mui/material";
import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function Title({ preStrong, strong, postStrong }) {
  return (
    <Stack
      sx={{ borderBottom: "2px solid #9c27b0", width: "fit-content" }}
      direction="row"
      alignItems="center"
      spacing={1}
      mt="1em"
    >
      <TipsAndUpdatesIcon color="secondary" />
      <Typography sx={{ fontSize: { xs: ".9em", sm: "1.5em", md: "1.5em" } }}>
        {preStrong ? preStrong : ""} <strong>{strong ? strong : ""}</strong>{" "}
        {postStrong ? postStrong : ""}
      </Typography>
    </Stack>
  );
}

export default Title;

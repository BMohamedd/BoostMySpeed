import CircleIcon from "@mui/icons-material/Circle";
import { Stack, Typography } from "@mui/material";
import React from "react";

function Metrics({ progress }) {
  const color =
    progress < 50 ? "#ef5350" : progress > 90 ? "#66bb6a" : "#ffa726";
  return (
    <Stack
      alignSelf="flex-start"
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <CircleIcon sx={{ color: color }} fontSize="1em" />
      <Typography variant="body2">
        {progress < 50 ? "Bad" : progress > 90 ? "Great" : "Need Improvment"}
      </Typography>
    </Stack>
  );
}

export default Metrics;

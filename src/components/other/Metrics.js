import CircleIcon from "@mui/icons-material/Circle";
import { Stack, Typography, Tooltip } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <span>
          {progress < 50 ? "Bad" : progress > 90 ? "Great" : "Need Improvment"}
        </span>
        <Tooltip title="The following metrics are generated using Lighthouse Performance data">
          <HelpOutlineIcon fontSize="10px" />
        </Tooltip>
      </Typography>
    </Stack>
  );
}

export default Metrics;

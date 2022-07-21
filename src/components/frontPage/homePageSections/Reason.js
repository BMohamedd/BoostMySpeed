import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Typography } from "@mui/material";

function Reason({ text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <TaskAltIcon color="secondary" sx={{ fontSize: "1.5em" }} />
      <Typography component="p" variant="h5" color="gray" fontWeight="bolder">
        {" "}
        {text}
      </Typography>
    </Box>
  );
}

export default Reason;

import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function PassedFailedTest({ passed, testName }) {
  return (
    <Box
      sx={{
        paddingY: ".5em",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "#616161",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CircleIcon fontSize="10px" color={passed ? "success" : "error"} />
        <span>{testName}</span>
      </Typography>
      {passed ? (
        <CheckIcon fontSize="10px" color="success" />
      ) : (
        <CloseIcon fontSize="10px" color="error" />
      )}
    </Box>
  );
}

export default PassedFailedTest;

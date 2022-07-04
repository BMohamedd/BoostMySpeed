import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Typography, Collapse, IconButton, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function PassedFailedTest({ passed, testName, description }) {
  const [open, changeOpen] = React.useState(false);
  const Impact = Math.random() > 0.5 ? "Low" : "Medium";
  return (
    <Box
      sx={{
        paddingY: ".5em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
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
          {passed ? (
            <CheckIcon fontSize="10px" color="success" />
          ) : (
            <CloseIcon fontSize="10px" color="error" />
          )}{" "}
          <span>{testName}</span>
        </Typography>
        <IconButton onClick={() => changeOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>

      <Collapse
        sx={{ paddingLeft: "2em" }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <Typography
          sx={{
            borderBottom: "1px solid #9c27b0",
            fontSize: "1.5em",
            width: "fit-content",
            mb: ".5em",
          }}
        >
          Description
        </Typography>
        <Typography>{description}</Typography>
        <Typography
          sx={{
            borderBottom: "1px solid #9c27b0",
            fontSize: "1.5em",
            width: "fit-content",
            mb: ".5em",
            mt: "1em",
          }}
        >
          Impact
        </Typography>
        <Typography sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {Impact === "Low" ? (
            <ArrowDropDownIcon color="error" />
          ) : (
            <ArrowDropUpIcon color="success" />
          )}
          <strong>{Impact}</strong>
        </Typography>
      </Collapse>
    </Box>
  );
}

export default PassedFailedTest;

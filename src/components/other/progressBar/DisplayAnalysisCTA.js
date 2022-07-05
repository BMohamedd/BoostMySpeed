import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import HandymanIcon from "@mui/icons-material/Handyman";
import { useNavigate } from "react-router-dom";

function DisplayAnalysisCTA({ progress }) {
  const navigate = useNavigate();
  const text =
    progress < 50
      ? "Your Site Is Much Slower Than Other Sites"
      : progress > 90
      ? "Your Site Is Good Compared To Most Sites"
      : "Your Site Is Slower Than Other Sites";
  return (
    <Stack>
      <Typography sx={{ fontSize: { xs: "3em" } }}>
        {text}{" "}
        <strong style={{ color: "#9c27b0" }}>Lets Make It Better!</strong>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => navigate("/contact")}
        endIcon={<HandymanIcon />}
      >
        <strong>Fix My Site speed</strong>
      </Button>
    </Stack>
  );
}

export default DisplayAnalysisCTA;

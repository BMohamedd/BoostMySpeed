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
      ? "Well done! Your performance score is"
      : "Your performance score is";
  const keyWord = progress < 50 ? "BAD." : progress > 90 ? "GREAT." : "GOOD.";
  return (
    <Stack>
      <Typography sx={{ fontSize: { xs: "1.5em", md: "3em" } }}>
        {text} <strong style={{ color: "#9c27b0" }}> {keyWord} </strong>
        {progress < 50 ? "Users HATE slow sites!" : ""} Lets Make It Better!
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

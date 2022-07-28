import { Paper, Typography, Box, Divider, Link } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";

function Summary({ type, name, errorObj }) {
  return (
    <Paper>
      <Typography
        sx={{
          fontSize: "1.5em",
          padding: ".5em",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <InfoIcon color="secondary" />
        <span>Information</span>
      </Typography>
      <Divider />
      <Box sx={{ ml: ".5em ", mt: "1em" }}>
        <Typography color="#646464" fontWeight="bold">
          Type: {type}
        </Typography>
        <Typography mb="1em" color="#646464" fontWeight="bold">
          name: {name}
        </Typography>
      </Box>

      <Divider />
      <Typography
        sx={{
          fontSize: "1.5em",
          padding: ".5em",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <MenuIcon color="secondary" />
        <span>Sections</span>
      </Typography>
      <Box
        sx={{
          paddingBottom: ".5em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {errorObj.sections.map((section) => {
          return (
            <Link
              key={section.title}
              href={"#" + section.title}
              color="secondary"
              sx={{
                marginBottom: ".5em",
                marginLeft: "1em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon sx={{ display: { md: "none", lg: "inline" } }} />
              <span>{section.title}</span>
            </Link>
          );
        })}
      </Box>
    </Paper>
  );
}

export default Summary;

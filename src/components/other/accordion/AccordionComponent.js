import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionComponent({ summary, details }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {summary || "please pass the 'summary' attribute..."}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {details || "please pass the 'details' attribute..."}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComponent;

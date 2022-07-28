import React from "react";
import NoSubSection from "./NoSubSection";
import { Box } from "@mui/material";
import SubImg from "./subSectionComponents.js/SubImg";
import NormalSubSec from "./subSectionComponents.js/NormalSubSec";
import SubVid from "./subSectionComponents.js/SubVid";
import DeepScan from "./subSectionComponents.js/Deep Scan/DeepScan";

function SubSection({ section }) {
  return (
    <Box mt="2em">
      <NoSubSection section={section} />
      {section.subSections.map((subSec, index) => {
        /* if the subsection is an image */

        if (subSec.title === "img") {
          return <SubImg key={index} subSec={subSec} />;
        } else if (subSec.title === "vid") {
          return <SubVid key={index} subSec={subSec} />;
        } else if (subSec.title === "scan") {
          return <DeepScan key={index} />;
        } else {
          return <NormalSubSec key={index} section={subSec} />;
        }
      })}
    </Box>
  );
}

export default SubSection;

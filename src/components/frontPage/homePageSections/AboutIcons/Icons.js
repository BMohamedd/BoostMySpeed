import React from "react";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
function Icons({ index }) {
  if (index === 0) {
    return <RocketLaunchRoundedIcon fontSize="0.5em" />;
  } else if (index === 1) {
    return <SpaRoundedIcon fontSize="0.5em" />;
  } else {
    return <BuildRoundedIcon fontSize="0.5em" />;
  }
}

export default Icons;

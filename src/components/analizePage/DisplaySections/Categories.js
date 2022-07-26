import { Divider, Stack, Typography, Box, Tooltip } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ProgressBar from "../../other/progressBar/ProgressBar";
import Metrics from "../../other/Metrics";
import DisplayAnalysisCTA from "../../other/progressBar/DisplayAnalysisCTA";
import {
  performanceT,
  seoT,
  accessibilityT,
  FinalScreenShotT,
} from "../../other/tooltip Text/categories";

function Categories({ values, ScreenShot }) {
  return (
    <Box mb="2em">
      {/* progress */}
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap" }}
        justifyContent="space-evenly"
        mt="2em"
        mb="2em"
      >
        {/* performance */}
        <Stack
          spacing={1}
          alignItems="flex-start"
          sx={{ width: { xm: "80%", sm: "25%", md: "25%", lg: "15%" } }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <strong>Performance</strong>
            <Tooltip title={performanceT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar progress={Math.round(values.performance.score * 100)} />
          <Metrics progress={Math.round(values.performance.score * 100)} />
        </Stack>
        {/* accessibility */}
        <Stack
          spacing={1}
          alignItems="flex-start"
          sx={{ width: { xm: "80%", sm: "25%", md: "25%", lg: "15%" } }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <strong>Accessibility</strong>
            <Tooltip title={accessibilityT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar
            progress={Math.round(values.accessibility.score * 100)}
          />
          <Metrics progress={Math.round(values.accessibility.score * 100)} />
        </Stack>
        {/* seo */}
        <Stack
          spacing={1}
          alignItems="flex-start"
          sx={{ width: { xm: "80%", sm: "25%", md: "25%", lg: "15%" } }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <strong>SEO</strong>
            <Tooltip title={seoT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar progress={Math.round(values.seo.score * 100)} />
          <Metrics progress={Math.round(values.seo.score * 100)} />
        </Stack>
      </Stack>
      {/* pic & cirle */}
      <Divider />
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-evenly" },
        }}
        mt="5em"
      >
        {/* Call to action */}
        <Stack sx={{ width: { xs: "80%", sm: "40%", md: "50%", lg: "40%" } }}>
          <DisplayAnalysisCTA
            progress={Math.round(values.performance.score * 100)}
          />
        </Stack>
        <Divider />
        {/* pic */}
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            width: { xs: "50%", sm: "25%", md: "15%", lg: "150px" },
            mt: { xs: "7em", sm: "0" },
          }}
        >
          <img
            width="100%"
            src={ScreenShot}
            alt="final Website Screen Shot"
            style={{ border: "1px solid gray" }}
          />
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <span>Final Website Screenshot</span>
            <Tooltip title={FinalScreenShotT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Categories;

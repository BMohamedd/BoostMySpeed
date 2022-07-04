import {
  Divider,
  Stack,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircleIcon from "@mui/icons-material/Circle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ProgressBar from "../../other/progressBar/ProgressBar";

function Categories({ values, ScreenShot }) {
  // T stands for title :)
  const performanceT =
    "Performance is about measuring how quickly a browser can assemble a webpage.";
  const seoT =
    "SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries";
  const accessibilityT =
    "Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.";
  const FinalScreenShotT =
    "The final Screen Shot is how your website looks after being painted by the browser";
  return (
    <Box mb="2em">
      {/* circles */}
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
          alignItems="center"
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
        </Stack>
        {/* accessibility */}
        <Stack
          spacing={1}
          alignItems="center"
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
        </Stack>
        {/* seo */}
        <Stack
          spacing={1}
          alignItems="center"
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
        mt="10em"
      >
        {/* ceircle */}
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: { xs: "60%", sm: "40%", md: "25%", lg: "20%" } }}
        >
          {/* performance */}
          <Stack spacing={1} alignItems="center" width="100%">
            <CircularProgressbar
              value={Math.round(values.performance.score * 100)}
              text={`${Math.round(values.performance.score * 100)}%`}
              background
              styles={buildStyles({
                backgroundColor: "#fff",
                pathColor:
                  values.performance.score * 100 < 50
                    ? "#ef5350"
                    : values.performance.score * 100 > 90
                    ? "#66bb6a"
                    : "#ffa726",
              })}
              strokeWidth={5}
            />
            <Typography>Performance</Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ width: "100%", color: "gray" }}
            textAlign="center"
          >
            Values are estimated and may vary. Depending on the Traffic and
            Location of the server
          </Typography>
          <Stack
            direction="row"
            width="100%"
            flexWrap="wrap"
            justifyContent="space-between"
            mt="1em"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <CircleIcon sx={{ color: "#ef5350" }} fontSize="1em" />
              <Typography variant="body2">Bad</Typography>
            </Stack>
            <Divider orientation="vertical" />
            <Stack direction="row" alignItems="center" spacing={1}>
              <CircleIcon sx={{ color: "#ffa726" }} fontSize="1em" />
              <Typography variant="body2">Good</Typography>
            </Stack>
            <Divider orientation="vertical" />
            <Stack direction="row" alignItems="center" spacing={1}>
              <CircleIcon sx={{ color: "#66bb6a" }} fontSize="1em" />
              <Typography variant="body2">Great</Typography>
            </Stack>
          </Stack>
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

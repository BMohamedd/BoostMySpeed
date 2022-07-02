import {
  Box,
  Typography,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Paper,
} from "@mui/material";
import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ImportantInformation({ audits }) {
  const [LCP, changeLCP] = React.useState(false);
  const [TTB, changeTTB] = React.useState(false);
  const [SI, changeSI] = React.useState(false);
  return (
    <Box mt="2em">
      {/* title */}
      <Stack
        sx={{ borderBottom: "2px solid #9c27b0", width: "fit-content" }}
        direction="row"
        alignItems="center"
        spacing={1}
        mt="1em"
        mb="3em"
      >
        <TipsAndUpdatesIcon color="secondary" />
        <Typography variant="h5">
          Here is What Our <strong>DEEP SCAN</strong> Found
        </Typography>
      </Stack>
      <Typography color="gray">DIAGNOSTICS</Typography>
      {/* table */}
      <TableContainer component={Paper}>
        <Table sx={{ wdith: { xs: "100%", sm: "80%", md: "70%" } }}>
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Test Name</TableCell>
              <TableCell>Your Time </TableCell>
              <TableCell>Time To Aim for</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* LCP */}
            <TableRow>
              <TableCell>
                <IconButton onClick={() => changeLCP(!LCP)}>
                  {LCP ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell>Largest Contentful Paint (LCP)</TableCell>
              <TableCell>
                {audits["largest-contentful-paint"].displayValue}
              </TableCell>
              <TableCell>1s - 2.5s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={LCP} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      gutterBottom
                      component="div"
                    >
                      What is LCP?
                    </Typography>
                    <p style={{ width: "80%" }}>
                      The Largest Contentful Paint (LCP) metric reports the
                      render time of the largest image or text block visible
                      within the viewport, relative to when the page first
                      started loading.
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      What is a good LCP score?{" "}
                    </Typography>
                    <p style={{ width: "80%" }}>
                      To provide a good user experience, sites should strive to
                      have Largest Contentful Paint of 2.5 seconds or less
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      How to improve LCP?{" "}
                    </Typography>
                    <p style={{ width: "80%", marginBottom: ".5em" }}>
                      LCP is primarily affected by four factors:
                    </p>
                    <ul>
                      <li>Slow server response times</li>
                      <li>Render-blocking JavaScript and CSS</li>
                      <li>Resource load times</li>
                      <li>Client-side rendering</li>
                    </ul>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      More Info{" "}
                    </Typography>
                    <a
                      style={{
                        color: "#9c27b0",
                        borderBottom: "1px dotted #9c27b0",
                        textDecoration: "none",
                      }}
                      href="https://web.dev/lcp/"
                    >
                      Click Here To Read More.
                    </a>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
            {/* TTB */}
            <TableRow>
              <TableCell>
                <IconButton onClick={() => changeTTB(!TTB)}>
                  {TTB ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell>Total Blocking Time (TBT)</TableCell>
              <TableCell>
                {audits["total-blocking-time"].displayValue}
              </TableCell>
              <TableCell>200 ms</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={TTB} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      gutterBottom
                      component="div"
                    >
                      What is TTB?
                    </Typography>
                    <p style={{ width: "80%" }}>
                      The Total Blocking Time (TBT) metric measures the total
                      amount of time between First Contentful Paint (FCP) and
                      Time to Interactive (TTI) where the main thread was
                      blocked for long enough to prevent input responsiveness.
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      What is a good TBT score?{" "}
                    </Typography>
                    <p style={{ width: "80%" }}>
                      To provide a good user experience, sites should strive to
                      have a Total Blocking Time of less than 200 milliseconds
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      How to improve TBT{" "}
                    </Typography>
                    <p style={{ width: "80%", marginBottom: ".5em" }}>
                      ways to improve TTB:
                    </p>
                    <ul>
                      <li>Reduce unused JavaScript</li>
                      <li>Optimize the application code</li>
                      <li>Optimize the database queries</li>
                      <li>Reduce HTTP requests</li>
                      <li>Use Respond First, Process Later (RFPL) cache</li>
                    </ul>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      More Info{" "}
                    </Typography>
                    <a
                      style={{
                        color: "#9c27b0",
                        borderBottom: "1px dotted #9c27b0",
                        textDecoration: "none",
                      }}
                      href="https://web.dev/tbt/"
                    >
                      Click Here To Read More.
                    </a>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
            {/* TTB */}
            <TableRow>
              <TableCell>
                <IconButton onClick={() => changeSI(!SI)}>
                  {SI ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell>Speed Index</TableCell>
              <TableCell>{audits["speed-index"].displayValue}</TableCell>
              <TableCell>1 - 3.4 s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={SI} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      gutterBottom
                      component="div"
                    >
                      What is Speed Index?
                    </Typography>
                    <p style={{ width: "80%" }}>
                      Speed Index measures how quickly content is visually
                      displayed during page load.
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      What is a good Speed Index?{" "}
                    </Typography>
                    <p style={{ width: "80%" }}>
                      To provide a good user experience, sites should strive to
                      have a Speed Index of 1 - 3.4 s
                    </p>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      How to improve Speed Index{" "}
                    </Typography>
                    <p style={{ width: "80%", marginBottom: ".5em" }}>
                      ways to improve Speed Index:
                    </p>
                    <ul>
                      <li>Reduce unused JavaScript</li>
                      <li>Optimize the application code</li>
                      <li>Optimize the database queries</li>
                      <li>Reduce HTTP requests</li>
                      <li>Use Respond First, Process Later (RFPL) cache</li>
                    </ul>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #9c27b0",
                        width: "fit-content",
                      }}
                      variant="h6"
                      mt="1em"
                      gutterBottom
                      component="div"
                    >
                      More Info{" "}
                    </Typography>
                    <a
                      style={{
                        color: "#9c27b0",
                        borderBottom: "1px dotted #9c27b0",
                        textDecoration: "none",
                      }}
                      href="https://web.dev/speed-index/"
                    >
                      Click Here To Read More.
                    </a>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ImportantInformation;

import React from "react";
import {
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Metrics from "../../../other/Metrics";
import ProgressBar from "../../../other/progressBar/ProgressBar";
import {
  performanceT,
  seoT,
  accessibilityT,
} from "../../../other/tooltip Text/categories";

function MainContent() {
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={5.5} md={3.5}>
        <Stack>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <strong>Performance</strong>
            <Tooltip title={performanceT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar progress="48" />
          <Metrics progress="48" />
        </Stack>
        <Stack>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <strong>Accessibility</strong>
            <Tooltip title={accessibilityT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar progress="77" />
          <Metrics progress="77" />
        </Stack>
        <Stack>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <strong>SEO</strong>
            <Tooltip title={seoT}>
              <HelpOutlineIcon fontSize="10px" />
            </Tooltip>
          </Typography>
          <ProgressBar progress="92" />
          <Metrics progress="92" />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5.5} md={8}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Your Time</TableCell>
              <TableCell>Time To Aim For</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>6.5s</TableCell>
              <TableCell>1s - 2.5s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>300ms</TableCell>
              <TableCell>200ms</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4.3s</TableCell>
              <TableCell>1s - 3.4s</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

export default MainContent;

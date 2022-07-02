import {
  Box,
  Stack,
  Typography,
  Tooltip,
  Divider,
  Button,
  Collapse,
} from "@mui/material";
import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TimerIcon from "@mui/icons-material/Timer";
import SearchIcon from "@mui/icons-material/Search";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PassedFailedTest from "./PassedFailedTest";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

function ScreenShots({ report, passed, failed }) {
  const [showPassed, ChangeShowPassed] = React.useState(false);
  const [showFailed, ChangeshowFailed] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Stack mt="3em">
      {/* scan info */}
      <Typography
        color="gray"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <span>SCAN INFORMATION</span>
        <Tooltip title="Some important information About The DEEP SCAN">
          <HelpOutlineIcon fontSize="10px" />
        </Tooltip>
      </Typography>
      <Box
        sx={{
          background: "#f5f5f5",
          color: "#616161",
          display: "flex",
          justifyContent: "space-between",
          padding: "1em 2em 1em 2em",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        {/* scan time & duration */}
        <Stack spacing={1}>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
          >
            <DateRangeIcon fontSize="10px" />
            <span>
              Captured at {new Date(report.data.fetchTime).toLocaleString()}
            </span>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
          >
            <TimerIcon fontSize="10px" />
            <span>
              Scan Duration {Math.round(report.data.timing.total / 1000)}s
            </span>
          </Typography>
        </Stack>
        {/* link & total audits */}
        <Stack spacing={1}>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
            noWrap
          >
            <SearchIcon fontSize="10px" />
            <span>Requested URL {report.data.requestedUrl}</span>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
          >
            <BatteryFullIcon fontSize="10px" />
            <span>Total Testes {passed.length + failed.length}</span>
          </Typography>
        </Stack>
        {/* testes passed & failed */}
        <Stack spacing={1}>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
            noWrap
          >
            <CheckIcon fontSize="10px" />
            <span>Testes Passed {passed.length}</span>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            variant="body2"
          >
            <CloseIcon fontSize="10px" />
            <span>Testes Failed {failed.length}</span>
          </Typography>
        </Stack>
      </Box>
      {/* scan screenshots */}
      <Typography
        color="gray"
        mt="3em"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <span>WEBSITE SCREENSHOTS</span>
        <Tooltip title="These ScreenShots Represent The Stages Which Your Website Go through During Loading">
          <HelpOutlineIcon fontSize="10px" />
        </Tooltip>
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {report.data.audits["screenshot-thumbnails"].details.items.map(
          (obj, index) => {
            return (
              <Box
                sx={{
                  width: {
                    xs: "40px",
                    sm: "50px",
                    md: "100px",
                    lg: "110px",
                    xl: "130px",
                  },
                }}
              >
                <img
                  src={obj.data}
                  style={{ border: "1px solid gray", width: "100%" }}
                  alt="website screenshot"
                  key={index}
                />
              </Box>
            );
          }
        )}
      </Box>
      {/* show passed and failed audits */}
      <Typography
        color="gray"
        mt="3em"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <span>ALL TESTES</span>
        <Tooltip title="Go deeper and take a look at the failed/passed testes to unlock more information about your website performance">
          <HelpOutlineIcon fontSize="10px" />
        </Tooltip>
      </Typography>
      {/* passed testes */}
      <Button
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        color="secondary"
        onClick={() => ChangeShowPassed(!showPassed)}
        size="small"
      >
        <Typography color="#616161">PASSED TESTES ({passed.length})</Typography>
        <p>{showPassed ? "Hide" : "Show"}</p>
      </Button>
      <Divider />
      <Collapse
        sx={{ paddingLeft: "2em" }}
        in={showPassed}
        timeout="auto"
        unmountOnExit
      >
        {passed.map((passedTest) => {
          return (
            <span>
              <PassedFailedTest passed={true} testName={passedTest.title} />
              <Divider />
            </span>
          );
        })}
      </Collapse>
      {/* failed testes */}
      <Button
        sx={{
          mt: "1em",
          display: "flex",
          justifyContent: "space-between",
        }}
        color="secondary"
        onClick={() => ChangeshowFailed(!showFailed)}
        size="small"
      >
        <Typography color="#616161">FAILED TESTES ({failed.length})</Typography>
        <p>{showFailed ? "Hide" : "Show"}</p>
      </Button>
      <Divider />
      <Collapse
        sx={{ paddingLeft: "2em" }}
        in={showFailed}
        timeout="auto"
        unmountOnExit
      >
        {failed.map((failedTest) => {
          return (
            <span>
              <PassedFailedTest passed={false} testName={failedTest.title} />
              <Divider />
            </span>
          );
        })}
      </Collapse>
      {/* action buttons */}
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
        alignItems="center"
        mt="2em"
      >
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          size="large"
          onClick={() => navigate("/")}
          endIcon={<HomeIcon />}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            GO BACK TO HOME PAGE
          </Typography>
        </Button>
        <Button disableElevation color="secondary" size="large">
          <Typography sx={{ fontWeight: "bold" }}>CONTACT US</Typography>{" "}
        </Button>
      </Stack>
    </Stack>
  );
}

export default ScreenShots;

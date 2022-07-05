import { Box, Stack, Typography, Grid, LinearProgress } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo.png";
import working from "../../assets/workingOnIt.svg";
import { Container } from "@mui/system";

function Loading() {
  console.log("loading...");
  const [dialog, changeDialog] = React.useState("Speedyourweb is warming up");
  const [num, changeNum] = React.useState(0);
  const toSay = [
    "1-second delay decreases customer satisfaction by 16%.",
    "47% of people expect a web page to load in 2 seconds or less",
    "40% will abandon a web page if it takes more than 3 seconds to load",
    "1-5 seconds load time increase the bounce rate probability by 90%",
    "On annual basis, 1-second delay can lead to $2.5 million in missed revenue if your shop generates $100,000 per day.",
    "Speedyourweb is gathering information to calculate your score.",
    "Almost there! Speedyourweb is creating Your report",
  ];
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      changeDialog(toSay[num]);
      changeNum(num === toSay.length - 1 ? 0 : num + 1);
    }, 5000);

    return () => clearInterval(intervalID);
  });
  return (
    <div style={{ position: "relative" }}>
      <Container
        sx={{
          paddingTop: "3em",
          display: "flex",
          flexDirection: "column",
          gap: "10em",
        }}
        maxWidth="xl"
      >
        <Stack alignItems="center">
          <img src={Logo} width="25px" alt="logo" />
          <Typography color="gray">BOOSTMYSPEED</Typography>
        </Stack>
        <Grid container justifyContent="space-evenly">
          <Grid item sm={12} md={4} lg={5}>
            {/* text */}
            <Typography
              variant="h3"
              color="gray"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span>Analyzing...</span>
            </Typography>
            <Typography
              color="gray"
              sx={{ width: { xs: "100%", sm: "70%", md: "auto" } }}
            >
              {dialog}
            </Typography>
          </Grid>
          {/* img */}
          <Grid item>
            <Box
              sx={{
                width: { xs: "0px", md: "250px", lg: "400px", xl: "600px" },
              }}
            >
              <img src={working} alt="working" width="100%" />
            </Box>
          </Grid>
        </Grid>
        <Typography color="gray" textAlign="center">
          Copyright &copy;
          {new Date().getFullYear() + " "} - BoostMySpeed
        </Typography>
        <LinearProgress
          color="secondary"
          sx={{
            width: "100vw",
            position: "absolute",
            top: "0",
            left: "0",
            height: "10px",
          }}
        />
      </Container>
    </div>
  );
}

export default Loading;

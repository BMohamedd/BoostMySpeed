import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo.png";
import working from "../../assets/workingOnIt.svg";
import { Container } from "@mui/system";

function Loading() {
  console.log("loading...");
  const [dialog, changeDialog] = React.useState("BOOSTMYSPEED is warming up");
  const [num, changeNum] = React.useState(0);
  const toSay = [
    "BOOSTMYSPEED is gathering information to calculate your score.",
    "almost there! BOOSTMYSPEED is creating Your report",
    "NDTV, one of India's leading news stations and websites, improved LCP by 55% and saw a 50% reduction in bounce rate.",
    "iCook improved CLS by 15% and saw a 10% increase in ad revenue as a result.",
    "Tokopedia improved LCP by 55% and saw a 23% increase in average session duration.",
    "Vodafone improved their LCP by 31%, resulting in an 8% increase in sales, a 15% increase in their lead to visit rate, and an 11% increase in their cart to visit rate.",
    "Yelp reduced First Contentful Paint (75th percentile) by 45% and Yelp Page Complete (75th percentile) by 25% and saw a 15% improvement in their conversion rate.",
    "After making improvements to multiple performance metrics (including LCP, CLS and Long Task time), Agrofy saw a 76% reduction in their abandonment rate and a significant boost in engagement.",
  ];
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      changeDialog(toSay[num]);
      changeNum(num === toSay.length - 1 ? 0 : num + 1);
    }, 5000);

    return () => clearInterval(intervalID);
  });
  return (
    <Container
      sx={{
        paddingTop: "3em",
        display: "flex",
        position: "relative",
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
            <span>Working On It...</span>
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
            sx={{ width: { xs: "0px", md: "250px", lg: "400px", xl: "600px" } }}
          >
            <img src={working} alt="working" width="100%" />
          </Box>
        </Grid>
      </Grid>
      <Typography color="gray" textAlign="center">
        Copyright &copy;
        {new Date().getFullYear() + " "} - BoostMySpeed
      </Typography>
    </Container>
  );
}

export default Loading;

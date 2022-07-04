import React from "react";
import { Grid, Container, Typography, Stack, Button } from "@mui/material";
import heroSVG from "../../../assets/hero.svg";
import { useNavigate, useLocation } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";

function Hero() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/start-deep-scan") {
      return scrollToSearch();
    }
  }, []);
  const navigate = useNavigate();
  const scrollToSearch = () => {
    const a = document.createElement("a");
    a.setAttribute("href", "#search-id");
    const body = document.querySelector("body");
    body.append(a);
    a.click();
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: { xs: "5em", md: "none" },
        minHeight: { xm: "fit-content", md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            my=".5em"
            sx={{ fontWeight: "bolder", fontSize: { xs: "2em", md: "4em" } }}
          >
            Increase your{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>PROFITS</span> &{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>SPEED</span>{" "}
            Today!
          </Typography>
          <Typography variant="h5" width="70%">
            If you want to increase your conversion, all you have to do is Click
            the button.
          </Typography>
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
              onClick={scrollToSearch}
              size="large"
              endIcon={<SpeedIcon />}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                START DEEP SCAN
              </Typography>
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              disableElevation
              color="secondary"
              size="large"
            >
              <Typography sx={{ fontWeight: "bold" }}>CONTACT US</Typography>{" "}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            style={{ maxWidth: "100%" }}
            src={heroSVG}
            alt="person doing a speed test"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

import React from "react";
import { AppBar, Button, Toolbar, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import HandymanIcon from "@mui/icons-material/Handyman";
import Logo from "../../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar
      sx={{ background: "#fff", color: "#000", width: "100vw", pb: ".5em" }}
    >
      <Container maxWidth="xl">
        {/* NAVIGATION ITEMS  AND CALL TO ACTION */}
        <Grid
          sx={{
            flexDirection: { xs: "row" },
            justifyContent: { xs: "space-evenly", sm: "space-between" },
            alignItems: "center",
          }}
          container
        >
          {/* LOGO */}
          <Grid item>
            <Toolbar>
              <img
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                src={Logo}
                width="30px"
                alt="Boost My Speed"
              ></img>
            </Toolbar>
          </Grid>

          {/* CALL TO ACTION */}
          <Grid
            item
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".5em",
              justifyContent: "center",
            }}
          >
            {/* contact */}
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => navigate("/plans")}
              endIcon={<HandymanIcon />}
            >
              <strong>Fix My Site speed</strong>
            </Button>
            {/* deep scan */}
            <Button
              disableElevation
              size="large"
              sx={{
                marginLeft: { md: "1em" },
              }}
              color="secondary"
              onClick={() => {
                if (location.pathname === "/start-deep-scan") {
                  window.scrollTo(0, 0);
                } else if (location.pathname === "/") {
                  window.scrollTo(0, 0);
                } else {
                  navigate("/start-deep-scan");
                }
              }}
            >
              <Typography color="secondary" sx={{ fontWeight: "bold" }}>
                Free speed test
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default NavBar;

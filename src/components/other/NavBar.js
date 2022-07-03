import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Stack,
  Paper,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { Container } from "@mui/system";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ background: "#fff", color: "#000" }}>
      <Container maxWidth="xl">
        {/* NAVIGATION ITEMS  AND CALL TO ACTION */}
        <Grid
          sx={{
            flexDirection: { xs: "row-reverse", sm: "row" },
            justifyContent: { xs: "space-evenly", sm: "space-between" },
            alignItems: "center",
          }}
          container
        >
          {/* NAVIGATION ITEMS */}
          <Grid item>
            <Stack spacing={2} direction="row">
              {/* how it works button */}
              <Tooltip title="how it works">
                <Paper elevation={3}>
                  <IconButton
                    size="small"
                    onClick={() => navigate("/how-it-works")}
                  >
                    <HelpOutlineIcon />
                  </IconButton>
                </Paper>
              </Tooltip>
              {/* about button */}
              <Tooltip title="About">
                <Paper elevation={3}>
                  <IconButton size="small">
                    <PersonIcon />
                  </IconButton>
                </Paper>
              </Tooltip>
              {/* contact button */}
              <Tooltip title="contact">
                <Paper elevation={3}>
                  <IconButton size="small" onClick={() => navigate("/contact")}>
                    <AddIcCallIcon />
                  </IconButton>
                </Paper>
              </Tooltip>
            </Stack>
          </Grid>

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
          <Grid item sx={{ display: { xs: "none", sm: "inline" } }}>
            <Button
              variant="outlined"
              disableElevation
              color="secondary"
              size="large"
              onClick={() => navigate("/start-deep-scan")}
              endIcon={<SpeedIcon />}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                START DEEP SCAN
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default NavBar;

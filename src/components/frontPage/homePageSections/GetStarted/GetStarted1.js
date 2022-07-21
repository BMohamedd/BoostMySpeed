import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GetStarted1() {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: "#ddd", paddingY: "2em" }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            justifyContent: { xs: "start", md: "space-between", gap: "1em" },
            alignItems: "center",
          }}
        >
          {/* text */}
          <Grid item xs={12} md={5.8}>
            <Typography
              color="secondary"
              component="h3"
              sx={{ fontSize: "1em", fontWeight: "bolder" }}
            >
              Start now
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "2em", fontWeight: "bolder" }}
            >
              Make Your Dream Project{" "}
              <span style={{ color: "#9c27b0" }}>Faster</span>
            </Typography>
            <Typography
              color="gray"
              sx={{ width: { xs: "100%", sm: "80%", md: "70%" } }}
            >
              Find out why We are trusted by developers and teams around the
              world, To Take Their business To the next level.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/plans")}
              color="secondary"
              sx={{ width: { xs: "100%", md: "60%" }, mt: "2em" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              {" "}
              Get Started
            </Button>
          </Grid>
          {/* cards */}
          <Grid
            item
            xs={12}
            md={5.8}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Card sx={{ width: "40%" }}>
              <CardContent>
                <Typography sx={{ fontSize: "1em", fontWeight: "bolder" }}>
                  View Plans
                </Typography>
                <Typography variant="body2">
                  Take A look At Our Plans And Decide Which One Is The Best For
                  You
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="secondary"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={() => navigate("/plans")}
                >
                  Lets Go
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ width: "40%" }}>
              <CardContent>
                <Typography sx={{ fontSize: "1em", fontWeight: "bolder" }}>
                  Contact Us
                </Typography>
                <Typography variant="body2">
                  If You're Having Any issues or You just have Some questions
                  contact Us!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="secondary"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={() => navigate("/contact")}
                >
                  Lets Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GetStarted1;

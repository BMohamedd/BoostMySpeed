import React from "react";
import { Grid, Container, Typography, Button, Box } from "@mui/material";
import docs from "../../../assets/documentation.svg";
import { useNavigate } from "react-router-dom";

function Default({ openDrawer }) {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: { xs: "10em", sm: "5em", md: "5em", lg: "0em" },
        minHeight: { xm: "fit-content", md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            mb=".5em"
            sx={{ fontWeight: "bolder", fontSize: { xs: "2em", md: "4em" } }}
          >
            Welcome To our official{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>
              Documentation!
            </span>{" "}
          </Typography>
          <Typography variant="h5" width="70%">
            Take A deep Dive Into the Issues Which Are Holding Your website back
            and discover The solutions all in one place!
          </Typography>
          <Box>
            <Button
              variant="contained"
              disableElevation
              size="large"
              color="secondary"
              sx={{ mt: "1em", mr: "1em" }}
              onClick={() => {
                navigate("LightHouse/First Contentful Paint");
              }}
            >
              Start Reading!
            </Button>
            <Button
              size="large"
              color="secondary"
              sx={{ mt: "1em" }}
              onClick={() => openDrawer(true)}
            >
              View Content
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            style={{ maxWidth: "100%" }}
            src={docs}
            alt="person doing a speed test"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Default;

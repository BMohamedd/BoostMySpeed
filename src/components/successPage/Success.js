import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Grid,
  LinearProgress,
  Box,
} from "@mui/material";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import success from "../../assets/success.svg";

function Success() {
  const { Item, changeItem } = useLocalStorage("step");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    changeItem("1");
    setTimeout(() => {
      navigate("/");
    }, 15000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
        }
        return oldProgress + 10;
      });
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: { xs: "10em", sm: "5em", md: "5em", lg: "0em" },
          marginBottom: "10em",
          minHeight: { xm: "fit-content", md: "100vh" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              my=".5em"
              sx={{ fontWeight: "bolder", fontSize: { xs: "2em", md: "4em" } }}
            >
              <span
                style={{ borderBottom: "5px solid #9c27b0", color: "#9c27b0" }}
              >
                Yay!
              </span>{" "}
              You Did It!
            </Typography>
            <Typography variant="h5" width="70%">
              Thank you for your purchase our speed optimization specialist will
              contact you soon via email
            </Typography>
            <Box sx={{ width: "60%" }}>
              <Typography color="gray" mt="2em" sx={{ width: "100%" }}>
                You Will Be Redirected To The Home Page In 15 Seconds...
              </Typography>
              <LinearProgress
                sx={{ width: "100%" }}
                color="secondary"
                variant="determinate"
                value={progress}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src={success}
              alt="person doing a speed test"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Success;

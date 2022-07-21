import React from "react";
import {
  CardMedia,
  Box,
  Paper,
  Container,
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
} from "@mui/material";
import Analysis from "../../../assets/ana.JPG";
import health from "../../../assets/doc.JPG";
import build from "../../../assets/build.JPG";
import Title from "../../other/title/Title";
import Icons from "./AboutIcons/Icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const content = [
    {
      img: Analysis,
      header: "Performance Analysis",
      body: "If you want to increase your conversion, all you have to do is follow the website analysis report. It will point out all of the performance errors you need to fix in order to increase your pageload.",
    },
    {
      img: health,
      header: "Health Checker",
      body: "Get a complete list of installed apps that effect your site from acheiving loading quickly. This audit analyzes your site to detect all the apps that effect your site speed- including the ones you think you uninstalled...",
    },
    {
      img: build,
      header: "Page Breakdown",
      body: "Our Shopify Speed Tool doesn't just analyzes your homepage like other speedcheckers. It crunches thru all the pages of your customers journey giving you a detailed performance report of the home.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Title preStrong="What we" strong="Provide:" />
      <Box
        sx={{
          mt: "2em",
          display: "flex",
          gap: "1em",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {content.map((value, index) => {
          return (
            <Paper
              key={index}
              elevation={5}
              sx={{ width: { xs: "100%", sm: "40%", md: "25%" } }}
            >
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={value.img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="gray"
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Icons index={index} />
                    <strong>{value.header}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {value.body}{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate("/plans")}
                  >
                    <strong>Start Now</strong>
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
}

export default About;

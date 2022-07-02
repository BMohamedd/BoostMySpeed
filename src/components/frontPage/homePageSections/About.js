import React from "react";
import {
  CardMedia,
  Box,
  Paper,
  Container,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import Analysis from "../../../assets/ana.JPG";
import health from "../../../assets/doc.JPG";
import build from "../../../assets/build.JPG";

function About() {
  const content = [
    {
      img: Analysis,
      header: "Performance Analysis",
      body: "If you want to increase your conversion, all you have to do is follow the website analysis report. It will point out all of the performance errors you need to fix in order to increase your pageload.",
    },
    {
      img: health,
      header: "Health Checker",
      body: "Get a complete list of installed apps that effect your site from acheiving loading quickly. This audit analyzes your site to detect all the apps that effect your site speed- including the ones you think you uninstalled but still linger in your code, slowing down your site. Make sure only the app you use show up in the list. Once you make changes, you can re-run the report and check to see if you did it correctly.",
    },
    {
      img: build,
      header: "Page Breakdown",
      body: "Our Shopify Speed Tool doesn't just analyzes your homepage like other speedcheckers. It crunches thru all the pages of your customers journey giving you a detailed performance report of the home, product collection and cart page.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          my: "1em",
        }}
      >
        What we Provide
      </Typography>
      <Box
        sx={{
          mt: "2em",
          display: "flex",
          gap: "1em",
          justifyContent: "space-between",
          alignContent: "start",
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
                  <Typography gutterBottom variant="h5" component="div">
                    {value.header}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {value.body}{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
}

export default About;

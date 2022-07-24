import React, { useRef } from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import thinkingSvg from "../../assets/FAQs.svg";
import Title from "../other/title/Title";
import CheckIcon from "@mui/icons-material/Check";
import AccordionComponent from "../other/accordion/AccordionComponent";
import questions from "./faqsArray";
import { Link } from "react-router-dom";
function Faqs() {
  const accordionRef = useRef();
  const scrollToAccordion = () => {
    accordionRef.current.scrollIntoView();
  };
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://i.imgur.com/piojg0X.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontWeight="bolder"
            color="white"
            textAlign="center"
            sx={{ width: "fit-content", fontSize: "2em" }}
          >
            Have any question?
          </Typography>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            onClick={scrollToAccordion}
            endIcon={<CheckIcon />}
          >
            Here Are the answers
          </Button>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          ref={accordionRef}
          mt="2em"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src={thinkingSvg}
              alt="question illustration"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Title strong="FAQ" />
            <Box my="2em">
              {questions.map((question) => {
                return (
                  <AccordionComponent
                    summary={question.summary}
                    details={question.details}
                  />
                );
              })}
            </Box>
            <Title preStrong="still have other" strong="Question?" />
            <Typography variant="h6" color="gray" sx={{ mt: "1em" }}>
              Can't find the answer?{" "}
              <Link
                to={{
                  pathname: "/contact",
                }}
              >
                Contact Us Directly
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Faqs;

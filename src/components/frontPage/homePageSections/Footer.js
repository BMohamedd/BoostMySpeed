import React from "react";
import {
  Box,
  Stack,
  Container,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import Whitelogo from "../../../assets/LogoWhite.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <svg
        style={{ position: "relative", top: "20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#9c27b0"
          fillOpacity="1"
          d="M0,192L34.3,165.3C68.6,139,137,85,206,101.3C274.3,117,343,203,411,213.3C480,224,549,160,617,165.3C685.7,171,754,245,823,256C891.4,267,960,213,1029,197.3C1097.1,181,1166,203,1234,224C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <Box sx={{ background: "#9c27b0", py: "2em" }}>
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            gap="1em"
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Stack sx={{ width: "fit-content" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <img src={Whitelogo} alt="logo" width="15px" />
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Speedyourweb
                  </Typography>
                </Box>
                <Typography
                  color="white"
                  sx={{ textAlign: { xs: "center", md: "start" } }}
                >
                  Copyright &copy;
                  {new Date().getFullYear() + " "} - Speedyourweb
                </Typography>
                <a
                  style={{
                    background: "#FFF",
                    padding: "10px 20px",
                    textDecoration: "none",
                    fontSize: "20px",
                    color: "#9c27b0",
                    fontFamily: "helvetica",
                    textAlign: "center",
                    marginTop: "1em",
                  }}
                  onClick={() => navigate("/contact")}
                  href=""
                >
                  Contact Us
                </a>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Stack
                justifyContent="space-between"
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <Typography fontSize="1.2em" fontWeight="bolder" color="white">
                  HELP
                </Typography>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/careers",
                  }}
                >
                  Careers
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/contact",
                  }}
                >
                  contact
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/faqs",
                  }}
                >
                  FAQs
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack
                justifyContent="space-between"
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <Typography fontSize="1.2em" fontWeight="bolder" color="white">
                  SERVICE
                </Typography>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/start-deep-scan",
                  }}
                >
                  Deep Scan
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/plans",
                  }}
                >
                  Plans
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/",
                  }}
                >
                  Home Page
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack
                justifyContent="space-between"
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <Typography fontSize="1.2em" fontWeight="bolder" color="white">
                  LEGAL
                </Typography>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/Privacy-Policy",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/Terms-And-Conditions",
                  }}
                >
                  Terms And Conditions
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/Privacy-Policy",
                  }}
                >
                  Cookie Policy
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;

import React from "react";
import { Box, Stack, Container, Typography, Button } from "@mui/material";
import Whitelogo from "../../../assets/LogoWhite.png";
import { useNavigate } from "react-router-dom";

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
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            flexWrap: "wrap",
          }}
        >
          <Stack>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                BoostMySpeed
              </Typography>
            </Box>
            <Typography color="white">
              Copyright &copy;
              {new Date().getFullYear() + " "} - BoostMySpeed
            </Typography>
          </Stack>
          <a
            style={{
              background: "#FFF",
              padding: "10px 20px",
              textDecoration: "none",
              fontSize: "20px",
              color: "#9c27b0",
              fontFamily: "helvetica",
            }}
            onClick={() => navigate("/contact")}
            href=""
          >
            Contact Us
          </a>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;

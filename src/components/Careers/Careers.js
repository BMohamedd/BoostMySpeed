import React, { useRef } from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import {
  Box,
  Typography,
  Button,
  Container,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import availableJobs from "./availableJob";
import { Link } from "react-router-dom";

function Careers() {
  const tableComponent = useRef();
  const scrollToTable = () => {
    tableComponent.current.scrollIntoView();
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
            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://i.imgur.com/8Lj5gJf.jpg)",
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
            gap: "1em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="white"
            textAlign="center"
            sx={{ width: "fit-content", fontSize: "2em" }}
          >
            UNLEASH SPEED
          </Typography>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            onClick={scrollToTable}
            endIcon={<FavoriteIcon />}
          >
            Work With Us
          </Button>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bolder"
          pt="4em"
          pb="2em"
          color="gray"
          textAlign="center"
          ref={tableComponent}
        >
          Work with us
        </Typography>
        <Box sx={{ width: "100%", overflowX: "scroll" }}>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableCell>
                <Typography sx={{ fontWeight: "Bolder" }}>
                  Open Positions: {availableJobs.length}
                </Typography>
              </TableCell>
              <TableCell>Skill Required</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>send resume</TableCell>
            </TableHead>
            <TableBody>
              {availableJobs.map((job) => {
                return (
                  <TableRow key={job.name}>
                    <TableCell>{job.name}</TableCell>
                    <TableCell>{job.skill}</TableCell>
                    <TableCell>{job.team}</TableCell>
                    <TableCell>{job.jobType}</TableCell>
                    <TableCell>
                      {" "}
                      <Link to={{ pathname: "/contact" }}>click here</Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <Box mt="2em">
          <Alert severity="info">
            <Link to={{ pathname: "/contact" }}>
              to Apply to Any of these Jobs Please Contact Us!
            </Link>
          </Alert>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default Careers;

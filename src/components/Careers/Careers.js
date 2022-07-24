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
          mt="2em"
          mb="2em"
          color="gray"
          textAlign="center"
        >
          Work with us
        </Typography>
        <Table ref={tableComponent}>
          <TableHead>
            <TableCell>
              <Typography sx={{ fontWeight: "Bolder" }}>
                Open Positions: {availableJobs.length}
              </Typography>
            </TableCell>
            <TableCell>Skill Required</TableCell>
            <TableCell>Team</TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "inline" } }}>
              Job Type
            </TableCell>
          </TableHead>
          <TableBody>
            {availableJobs.map((job) => {
              return (
                <TableRow key={job.name}>
                  <TableCell>{job.name}</TableCell>
                  <TableCell>{job.skill}</TableCell>
                  <TableCell>{job.team}</TableCell>
                  <TableCell sx={{ display: { xs: "none", sm: "inline" } }}>
                    {job.jobType}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
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

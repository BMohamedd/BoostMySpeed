import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ListCom from "../Drawer/list/List";
import { lightHouseError, YSlowError, PageSpeedError } from "../errors";
import NoSubSection from "./Sections/NoSubSection";
import SubSection from "./Sections/SubSection";
import NavigationIcon from "@mui/icons-material/Navigation";
import NotFound from "./Sections/NotFound";
import Summary from "./Sections/Summary";

function Display({ type, name, openDrawer }) {
  const navigate = useNavigate();
  const lightHouse = () => {
    const toReturn = lightHouseError.filter((error) => {
      if (error.errorName === name) {
        return error;
      }
    })[0];
    return toReturn;
  };
  const YS = () => {
    const toReturn = YSlowError.filter((error) => {
      if (error.errorName === name) {
        return error;
      }
    })[0];
    return toReturn;
  };
  const PS = () => {
    const toReturn = PageSpeedError.filter((error) => {
      if (error.errorName === name) {
        return error;
      }
    })[0];
    return toReturn;
  };
  const navigateToDocs = () => {
    return navigate("/docs");
  };
  const errorObj =
    type === "LightHouse" ? lightHouse() : type === "Yslow" ? YS() : PS();

  if (errorObj) {
    return (
      <Container
        maxWidth="xl"
        sx={{ marginTop: { xs: "10em", sm: "4em", md: "5em" } }}
      >
        <Grid container justifyContent="space-between">
          {/* list */}
          <Grid item sx={{ display: { xs: "none", md: "inline" } }} md={2.5}>
            <Paper>
              {" "}
              <Typography
                sx={{
                  fontSize: { md: "1.2em", lg: "1.5em" },
                  padding: ".5em",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <NavigationIcon color="secondary" />
                <span>Navigation</span>
              </Typography>
              <Divider />
              <ListCom />
            </Paper>
            <Paper sx={{ mt: "2em" }}>
              <Alert severity="info">
                Does This Feel Overwhelming?{" "}
                <Typography
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => navigate("/plans")}
                >
                  Hire a professional to do it for you!
                </Typography>
              </Alert>
            </Paper>
          </Grid>
          {/* main article */}
          <Grid item md={6}>
            {/* title */}
            <Paper sx={{ padding: "1em" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  sx={{ display: { xs: "inline", md: "none" } }}
                  onClick={() => openDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{ fontSize: { xs: "1.2em", md: "2em" } }}
                  color="secondary"
                >
                  {type}: {errorObj.errorName}
                </Typography>
              </Box>
              {/* sections */}
              <Divider />
              {errorObj.sections.map((section) => {
                // if the section contains subSections
                if (section.subSections) {
                  return (
                    <div key={section.title} id={section.title}>
                      <SubSection section={section} />{" "}
                      <Box mt="2em">
                        <Divider />
                      </Box>
                    </div>
                  );
                } else {
                  // if the section does not contains subSections
                  return (
                    <div key={section.title} id={section.title}>
                      <NoSubSection section={section} />{" "}
                      <Box mt="2em">
                        <Divider />
                      </Box>
                    </div>
                  );
                }
              })}
            </Paper>
          </Grid>
          {/* summary */}
          <Grid item md={3} sx={{ display: { xs: "none", md: "inline" } }}>
            <Summary errorObj={errorObj} type={type} name={name} />
          </Grid>
        </Grid>
      </Container>
    );
  } else return <NotFound />;
}

export default Display;

import React from "react";
import { Container, Typography, Stack, Divider } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Categories from "./DisplaySections/Categories";
import ImportantInformation from "./DisplaySections/ImportantInformation";
import ScreenShots from "./DisplaySections/ScreenShots";

function DisplayAnaliysis({ passed, failed, fullReport }) {
  // console.log(passed, failed, fullReport);
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: { xs: "10em", sm: "5em", md: "5em" } }}
    >
      {/* header */}
      <Typography sx={{ fontSize: { xs: "1em", md: "1.5em" } }}>
        Speed test results for:{" "}
        <strong style={{ color: "#9c27b0" }}>{fullReport.data.finalUrl}</strong>
      </Typography>
      <Stack
        sx={{ borderBottom: "2px solid #9c27b0", width: "fit-content" }}
        direction="row"
        alignItems="center"
        spacing={1}
        mt="1em"
      >
        <TipsAndUpdatesIcon color="secondary" />
        <Typography sx={{ fontSize: { xs: ".9em", sm: "1.5em", md: "2em" } }}>
          Here Is What Your users are <strong>REALLY</strong> experiencing
        </Typography>
      </Stack>
      {/* categories */}
      <Categories
        values={fullReport.data.categories}
        ScreenShot={fullReport.data.audits["final-screenshot"].details.data}
      />
      <Divider />
      <ImportantInformation audits={fullReport.data.audits} />
      <ScreenShots report={fullReport} passed={passed} failed={failed} />
    </Container>
  );
}

export default DisplayAnaliysis;

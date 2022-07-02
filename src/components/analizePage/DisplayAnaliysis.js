import React from "react";
import {
  Container,
  Typography,
  Stack,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Categories from "./DisplaySections/Categories";
import ImportantInformation from "./DisplaySections/ImportantInformation";
import ScreenShots from "./DisplaySections/ScreenShots";

function DisplayAnaliysis({ passed, failed, fullReport }) {
  console.log("Analiysis completed");
  console.log(passed, failed, fullReport);
  return (
    <Container maxWidth="xl" sx={{ marginTop: "2em" }}>
      {/* header */}
      <Alert severity="success">
        <AlertTitle>Success!</AlertTitle>
        Showing results for URL: <strong>{fullReport.data.finalUrl}</strong>
      </Alert>
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

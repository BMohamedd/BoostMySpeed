import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { TextField, Typography, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function Contact() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xl">
        <Stack
          sx={{
            borderBottom: "2px solid #9c27b0",
            width: "fit-content",
            marginTop: "10em",
          }}
          direction="row"
          alignItems="center"
          spacing={1}
          mt="1em"
          mb="3em"
        >
          <TipsAndUpdatesIcon color="secondary" />
          <Typography variant="h5">
            Lets Be <strong>Friends</strong>
          </Typography>
        </Stack>
        {/* we are submitting this form using formsubmit visit their site for more info "formsubmit.co" */}
        <form
          action="https://formsubmit.co/idasgamification@gmail.com"
          method="POST"
        >
          <Stack spacing={3}>
            <TextField
              type="text"
              name="name"
              label="Full name"
              required
              helperText="what's your name?"
              maxlength="320"
            />
            <TextField
              type="email"
              name="email"
              helperText="Where Can We Find You?"
              maxlength="320"
              label="Email"
              required
            />
            <TextField
              type="text"
              name="messsage"
              helperText="What Would You like To share?"
              label="Message (max = 900)"
              required
              multiline
              rows="10"
              maxlength="900"
            ></TextField>
            <Button variant="outlined" color="secondary" type="submit">
              Send
            </Button>
          </Stack>
        </form>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;

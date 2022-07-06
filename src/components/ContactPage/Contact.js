import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { TextField, Typography, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function Contact() {
  const [websiteValid, ChangeWebsiteValid] = React.useState(false);
  // returns true if str is valid url
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  // checkes if the website is valid
  const handleEditWebsite = (e) => {
    if (validURL(e.target.value)) {
      return ChangeWebsiteValid(true);
    } else {
      return ChangeWebsiteValid(false);
    }
  };
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
          mb="1em"
        >
          <TipsAndUpdatesIcon color="secondary" />
          <Typography variant="h5">
            Lets Get <strong>Started</strong>
          </Typography>
        </Stack>
        <Typography color="gray" mb="3em">
          <strong>
            {" "}
            Awesome! Just One More Step, Tell Us Who You Are And we'll Reach Out
            And Get Started
          </strong>
        </Typography>
        {/* we are submitting this form using formsubmit visit their site for more info "formsubmit.co" */}
        <form
          action="https://formsubmit.co/idasgamification@gmail.com"
          method="POST"
        >
          <Stack spacing={3}>
            <TextField
              type="text"
              name="name"
              variant="standard"
              label="Full name"
              color="secondary"
              required
              helperText="what's your name?"
              maxLength="320"
            />
            <TextField
              type="email"
              name="email"
              helperText="Where Can We Find You?"
              maxLength="320"
              variant="standard"
              label="Email"
              color="secondary"
              required
            />
            <TextField
              color="secondary"
              type="text"
              name="website"
              onChange={handleEditWebsite}
              variant="standard"
              helperText={websiteValid ? "" : "Please Enter A Valid Url"}
              error={websiteValid ? false : true}
              maxLength="320"
              label="website"
              required
            />
            <TextField
              type="text"
              name="messsage"
              helperText="What Would You like To share?"
              label="Message (max = 900)"
              color="secondary"
              required
              multiline
              variant="filled"
              rows="10"
              maxLength="900"
            ></TextField>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={websiteValid ? false : true}
            >
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

import React from "react";
import {
  TextField,
  Typography,
  Button,
  Stack,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import Title from "../../other/title/Title";
import { useNavigate } from "react-router-dom";

function WesiteInfo() {
  const navigate = useNavigate();
  const [websiteValid, ChangeWebsiteValid] = React.useState(false);
  const [error, changeError] = React.useState(false);
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
    if (e.target.value === "") {
      return changeError(false);
    }
    if (validURL(e.target.value)) {
      changeError(false);
      return ChangeWebsiteValid(true);
    } else {
      changeError(true);
      return ChangeWebsiteValid(false);
    }
  };
  return (
    <div>
      <Container maxWidth="xl">
        <Title
          preStrong="Tell us"
          strong="More"
          postStrong="About Your Website:"
        />
        <Typography color="gray" mt="2em" mb="1em">
          <strong> MAKE SURE THAT THIS INFORMATION IS CORRECT!</strong>
        </Typography>
        {/* we are submitting this form using formsubmit visit their site for more info "formsubmit.co" */}
        <form
          action="https://formsubmit.co/idasgamification@gmail.com"
          method="POST"
        >
          <Stack spacing={1}>
            <Grid container gap="10px" justifyContent="space-between">
              <Grid item xs={12} sm={5.5}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="name"
                  variant="standard"
                  label="Full name"
                  color="secondary"
                  required
                  helperText="what's your name?"
                  maxLength="320"
                />
              </Grid>
              <Grid item xs={12} sm={5.5}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  type="email"
                  name="email"
                  helperText="Where Can We Find You?"
                  maxLength="320"
                  variant="standard"
                  label="Email"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={5.5}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  color="secondary"
                  type="text"
                  name="website"
                  onChange={handleEditWebsite}
                  variant="standard"
                  helperText="Please Enter A Valid Url"
                  error={error ? true : false}
                  maxLength="320"
                  label="website"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={5.5}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  color="secondary"
                  type="text"
                  name="host Priver"
                  variant="standard"
                  helperText="Please Enter A Valid Url"
                  maxLength="320"
                  label="host Priver"
                  required
                />
              </Grid>
            </Grid>
            <InputLabel id="demo-simple-select-label">website Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="website Type"
              required
              variant="standard"
              label="Age"
              color="secondary"
            >
              <MenuItem value="wordPress">WordPress</MenuItem>
              <MenuItem value="Shopify">Shopify</MenuItem>
            </Select>

            <TextField
              type="text"
              name="issue"
              helperText="What Would You like To share?"
              label="Describe Your issue (max = 900)"
              color="secondary"
              required
              multiline
              variant="filled"
              rows="10"
              maxLength="900"
            ></TextField>
            <Typography color="gray" mt="2em">
              <strong> Terms and conditions *</strong>
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  defaultChecked
                  label="Label"
                  required
                />
              }
              label={
                <Typography>
                  I confirm that I have read and agree to{" "}
                  <a
                    style={{ color: "#9c27b0" }}
                    href={`${window.location.origin}/Terms-And-Conditions`}
                  >
                    the terms and conditions
                  </a>
                </Typography>
              }
              required
            />
            <Typography color="gray" mt="2em" mb="1em">
              <strong> PRIVACY *</strong>
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="secondary"
                  label="Label"
                  required
                />
              }
              label={
                <Typography>
                  I consent to have SpeedYourWeb store my submitted information,
                  in accordance with
                  <a
                    style={{ color: "#9c27b0" }}
                    href={`${window.location.origin}/Privacy-Policy`}
                  >
                    {" "}
                    the privacy policy.{" "}
                  </a>
                </Typography>
              }
              required
            />
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
    </div>
  );
}

export default WesiteInfo;

import React from "react";
import {
  Box,
  Paper,
  InputBase,
  Divider,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";

function SearchArea() {
  const navigate = useNavigate();
  const [url, changeURl] = React.useState("");
  const [unvalidUrl, changeUnvalidURL] = React.useState(false);
  // updates url with the new inputs
  const handleChangeURL = (e) => {
    return changeURl(e.target.value);
  };
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
  // handle the submit if the key pressed was Enter
  const handleSubmitWithEnter = (e) => {
    if (e.key === "Enter") {
      if (validURL(url)) {
        checkURL(url);
      } else {
        changeUnvalidURL(true);
      }
    }
  };
  // handle the submit if the search icon was clicked
  const handleSubmitWithIcon = () => {
    if (validURL(url)) {
      checkURL(url);
    } else {
      changeUnvalidURL(true);
    }
  };

  const checkURL = (url) => {
    if (url.startsWith("http://")) {
      return navigate(`/analize/${url.replace("http://", "")}`);
    }
    if (url.startsWith("https://")) {
      return navigate(`/analize/${url.replace("https://", "")}`);
    }
    // navigate to the analyze page
    return navigate(`/analize/${url}`);
  };

  return (
    <Box sx={{ marginY: "2em" }}>
      <Paper
        elevation={5}
        sx={{
          marginBottom: "1em",
          height: "60px",
          marginB: ".5em",
          width: { xs: "100%", md: "90%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <ElectricBoltRoundedIcon color="secondary" />
        <InputBase
          error={unvalidUrl}
          placeholder="Enter URL to Analyze …"
          onChange={handleChangeURL}
          onKeyDown={handleSubmitWithEnter}
          sx={{
            width: "80%",
          }}
        ></InputBase>
        <Divider orientation="vertical" />
        <Tooltip title="GO!">
          <IconButton onClick={handleSubmitWithIcon}>
            <SearchRoundedIcon color="secondary" />
          </IconButton>
        </Tooltip>
      </Paper>
      <Typography color="error">
        {unvalidUrl ? <strong>Please Enter A Valid Url</strong> : ""}
      </Typography>
    </Box>
  );
}

export default SearchArea;

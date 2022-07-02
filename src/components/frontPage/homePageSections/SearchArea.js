import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  InputBase,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";

function SearchArea() {
  const navigate = useNavigate();
  const [url, changeURl] = React.useState("");
  // updates url with the new inputs
  const handleChangeURL = (e) => {
    return changeURl(e.target.value);
  };
  // handle the submit if the key pressed was Enter
  const handleSubmitWithEnter = (e) => {
    if (e.key === "Enter") {
      checkURL(url);
    }
  };
  // handle the submit if the search icon was clicked
  const handleSubmitWithIcon = () => {
    checkURL(url);
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
    <Box sx={{ background: "#ddd", py: "2em" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bolder",
            mb: ".5em",
            fontSize: { xs: "2em", md: "4em" },
          }}
          textAlign="center"
        >
          Performance Analyzer
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bolder", color: "gray" }}
          textAlign="center"
        >
          If you’re struggling to convert your visitors on your site, Just Enter
          your website's link and let us take care fo the rest
        </Typography>
        <Paper
          elevation={5}
          sx={{
            marginTop: ".5em",
            marginLeft: "auto",
            marginRight: "auto",
            height: "60px",
            width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "10px",
          }}
        >
          <ElectricBoltRoundedIcon color="secondary" />
          <InputBase
            placeholder="Analyze This Website | exaple: Google.com"
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
      </Container>
    </Box>
  );
}

export default SearchArea;

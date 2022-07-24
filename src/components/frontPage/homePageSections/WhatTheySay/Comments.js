import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircleIcon from "@mui/icons-material/Circle";

function Comments() {
  const [displayed, setDisplayed] = useState("0");
  const Content = [
    {
      name: "Enrique C Baker",
      photoURL: "https://i.imgur.com/xOCCKL7.jpg",
      text: "Absolutely incredible work! Look no further - these guys are the real deal! They took my 40's score on mobile and made it 95 - no joke. (I chose the top-tier offer by the way.) Also, I spent hours trying to improve my score before taking it to them with no avail. I am completely surprised (in a good way) that they were able to improve the score that much! I will be back for more!! Thank you so much and God bless!",
      occupation: "Small Besiness Owner",
    },
    {
      photoURL: "https://i.imgur.com/mR8wKtv.jpg",
      name: "James Samuels",
      text: "They Are just absolute animals, They boosted the speed of my website to 95+ when I thought it was just impossible. I have worked with like 5 freelancers and overall You Guys Are just on another level. Thank you man, very recommended!!",
      occupation: "Entrepreneur",
    },
    {
      name: "Margaret Chang",
      text: "They are not good, they are amazing doing his job. He even contacted my hosting service to make sure everything works fine. It is worth every penny invested. I will work with him again.",
      photoURL: "https://i.imgur.com/02c24HZ.jpg",
      occupation: "Junior Website Developer",
    },
  ];
  const handleNext = () => {
    setDisplayed((oldState) => {
      if (oldState < 2) {
        return JSON.stringify(Number(oldState) + 1);
      }
      return "0";
    });
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 15000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Box>
      {/* header */}
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={handleNext} color="secondary">
          <Tooltip title="Next">
            <NavigateNextIcon />
          </Tooltip>
        </IconButton>
        <Stack direction="row" spacing={1} alignItems="center">
          <CircleIcon
            sx={{ fontSize: ".5em" }}
            color={displayed === "0" ? "secondary" : "gray"}
          />
          <CircleIcon
            sx={{ fontSize: ".5em" }}
            color={displayed === "1" ? "secondary" : "gray"}
          />
          <CircleIcon
            sx={{ fontSize: ".5em" }}
            color={displayed === "2" ? "secondary" : "gray"}
          />
        </Stack>
      </Stack>
      <Typography
        variant="body1"
        component="p"
        mt="1em"
        sx={{ height: { xs: "300px", sm: "200px" } }}
      >
        "{Content[displayed].text}"
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "10px", mt: "1em" }}
      >
        <Avatar
          alt="name"
          src={Content[displayed].photoURL}
          sx={{ width: 56, height: 56 }}
        />
        <Stack>
          <Typography
            variant="body2"
            component="p"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <span>{Content[displayed].name},</span>{" "}
            <Typography color="gray">
              {Content[displayed].occupation}
            </Typography>
          </Typography>
          <Rating name="read-only" value="5" readOnly />
        </Stack>
      </Box>
    </Box>
  );
}

export default Comments;

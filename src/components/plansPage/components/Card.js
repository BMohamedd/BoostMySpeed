import { Paper, Box, Typography, Stack, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./Card.css";

function Card({ name, price, features, children }) {
  const navigate = useNavigate();
  return (
    <Paper elevation={5} sx={{ width: "100%", position: "relative" }}>
      {/* plan/price */}
      <Box
        sx={{
          width: "100%",
          background: "#ba68c8",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: "4em",
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: "bolder" }}
        >
          {name}
        </Typography>
        <Typography textAlign="center" color="white">
          <strong style={{ fontSize: "2em" }}>${price}</strong>{" "}
          <strong>/ Website</strong>{" "}
        </Typography>
      </Box>
      {/* features */}
      <Stack
        py="2em"
        alignItems="start"
        id="scrollContainer"
        sx={{
          height: "200px",
          overflowY: "scroll",
        }}
      >
        {features.split(",").map((feature) => {
          return (
            <Typography
              alignSelf="flex-start"
              sx={{
                marginLeft: "1em",
                mb: "1em",
                fontSize: "1.25em",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              color="gray"
            >
              <CheckIcon color="secondary" />
              <span>{feature}</span>
            </Typography>
          );
        })}
      </Stack>
      <Divider />
      {/* button */}
      <Box
        sx={{
          marginTop: "2em",
          paddingBottom: "1em",
          display: "grid",
        }}
      >
        <Button
          sx={{
            margin: "auto",
            fontWeight: "bolder",
            width: "60%",
          }}
          variant="contained"
          disableElevation
          size="large"
          color="secondary"
          onClick={() => {
            navigate("/buy/" + name);
          }}
        >
          BUY NOW{" "}
        </Button>
      </Box>
      {/* badge */}
      {children}
    </Paper>
  );
}

export default Card;

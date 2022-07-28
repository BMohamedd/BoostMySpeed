import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../../../../hooks/useLocalStorage";

function AutoIncrement({ start, time, title, subtitle }) {
  const { Item, changeItem } = useLocalStorage("number", start);
  const ms = time || 1000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeItem((oldState) => {
        return Number(oldState) + 1;
      });
    }, ms);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Box>
      <Typography
        color="secondary"
        sx={{
          fontSize: "1.5em",
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <span style={{ fontSize: "2.5em", fontWeight: "bolder" }}>{Item}</span>
        <Typography style={{ fontSize: "1.3em" }}>{title}</Typography>
      </Typography>
      <Typography color="gray" style={{ fontWeight: "bolder" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default AutoIncrement;

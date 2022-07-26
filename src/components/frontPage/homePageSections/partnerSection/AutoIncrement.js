import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function AutoIncrement({ start, time, title, subtitle }) {
  const [number, setNubmer] = useState(start ? start : 0);
  const ms = time || 1000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNubmer((oldState) => {
        return oldState + 1;
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
        <span style={{ fontSize: "2.5em", fontWeight: "bolder" }}>
          {number}
        </span>
        <Typography style={{ fontSize: "1.3em" }}>{title}</Typography>
      </Typography>
      <Typography color="gray" style={{ fontWeight: "bolder" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default AutoIncrement;

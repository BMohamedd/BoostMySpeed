import { Box } from "@mui/material";
import React from "react";
import ListCom from "../../Drawer/list/List";

function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>The Error Your looking for Does Not Exist...</p>
      <ListCom />
    </Box>
  );
}

export default NotFound;

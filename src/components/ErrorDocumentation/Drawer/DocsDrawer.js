import { Divider, Drawer, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ListCom from "./list/List";

import CloseIcon from "@mui/icons-material/Close";

function DocsDrawer({ isOpen, setOpen }) {
  return (
    <Drawer
      sx={{
        width: "fit-content",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <IconButton onClick={() => setOpen(false)}>
        <Tooltip title="Close">
          <CloseIcon color="error" />
        </Tooltip>
      </IconButton>
      <Divider />
      <ListCom />
    </Drawer>
  );
}

export default DocsDrawer;

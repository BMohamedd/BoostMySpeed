import { Divider, Drawer, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ListCom from "./list/List";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
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
          <KeyboardDoubleArrowLeftIcon />
        </Tooltip>
      </IconButton>
      <Divider />
      <ListCom />
    </Drawer>
  );
}

export default DocsDrawer;

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InfoIcon from "@mui/icons-material/Info";

export default function SpeedDialComponent() {
  const navigate = useNavigate();
  return (
    <Box>
      <SpeedDial
        FabProps={{
          sx: {
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "parimary.main",
            },
          },
        }}
        ariaLabel="SpeedDial basic example"
        color="secondary"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => {
          window.location.href = "http://m.me/Speedyourweb";
        }}
        icon={<ChatBubbleIcon openIcon={<ElectricBoltIcon />} />}
      ></SpeedDial>
    </Box>
  );
}

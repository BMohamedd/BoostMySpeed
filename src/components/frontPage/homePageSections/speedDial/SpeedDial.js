import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

export default function SpeedDialComponent() {
  const navigate = useNavigate();
  return (
    <Box>
      <SpeedDial
        FabProps={{
          sx: {
            bgcolor: "secondary.main",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          },
        }}
        ariaLabel="SpeedDial basic example"
        color="secondary"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<ElectricBoltIcon />} />}
      >
        <SpeedDialAction
          onClick={() => {
            navigate("/contact");
          }}
          icon={<PersonIcon />}
          tooltipTitle="Contact Us"
        />
        <SpeedDialAction
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          icon={<LocationSearchingIcon />}
          tooltipTitle="start Deep Scan"
        />

        <SpeedDialAction
          icon={<ShoppingCartIcon />}
          onClick={() => {
            navigate("/plans");
          }}
          tooltipTitle="View Plans"
        />
      </SpeedDial>
    </Box>
  );
}

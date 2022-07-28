import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { lightHouseError, PageSpeedError, YSlowError } from "../../errors";
import SpeedIcon from "@mui/icons-material/Speed";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ListCom() {
  const [lightHouseOpen, setLightHouseOpen] = useState(true);
  const [PageSpeedOpen, setPageSpeedOpen] = useState(true);
  const [YslowOpen, setYslowOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <List>
      <ListItemButton onClick={() => setLightHouseOpen(!lightHouseOpen)}>
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
        <ListItemText primary="LightHouse" />
        {lightHouseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={lightHouseOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {lightHouseError.map((value) => {
            return (
              <ListItemButton
                sx={{ pl: 4 }}
                key={value.errorName}
                onClick={() => navigate("/docs/LightHouse/" + value.errorName)}
              >
                <ListItemIcon>
                  <SubdirectoryArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={value.errorName} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={() => setPageSpeedOpen(!PageSpeedOpen)}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Page Speed (Legacy)" />
        {lightHouseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={PageSpeedOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {PageSpeedError.map((value) => {
            return (
              <ListItemButton
                sx={{ pl: 4 }}
                key={value.errorName}
                onClick={() => navigate("/docs/Page speed/" + value.errorName)}
              >
                <ListItemIcon>
                  <SubdirectoryArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={value.errorName} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={() => setYslowOpen(!YslowOpen)}>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="YSlow (Legacy)" />
        {lightHouseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={YslowOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {YSlowError.map((value) => {
            return (
              <ListItemButton
                sx={{ pl: 4 }}
                key={value.errorName}
                onClick={() => navigate("/docs/Yslow/" + value.errorName)}
              >
                <ListItemIcon>
                  <SubdirectoryArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={value.errorName} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}

export default ListCom;

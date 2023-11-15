import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItemButton,
} from "@mui/material";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { learningData } from "../data";
import { Link } from "react-router-dom";
import "../ComponentCSS/RolesMenu.css";

function RolesMenu(props) {
  const [expanded, setExpanded] = React.useState("App Roles");
  const data = learningData;

  const [selectedIndex, setSelectedIndex] = React.useState(
    props.selectedRoleId
  );
  const [roleType, setRoleType] = React.useState(
    data.filter((i) => i.roleId == props.selectedRoleId)[0].roleCategory
  );
  useEffect(() => {
    setSelectedIndex(props.selectedRoleId);
    setRoleType(
      data.filter((i) => i.roleId == props.selectedRoleId)[0].roleCategory
    );
    setExpanded(
      data.filter((i) => i.roleId == props.selectedRoleId)[0].roleCategory
    );
  }, [props.selectedRoleId]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const extractData = (data, key) => {
    if (key === "App Roles") {
      const expertData = data.filter((d) => d.roleCategory == "App Roles");

      return {
        rolesData: expertData,
      };
    } else if (key === "Infra Roles") {
      const expertData = data.filter((d) => d.roleCategory == "Infra Roles");

      return {
        rolesData: expertData,
      };
    } else if (key === "Data Roles") {
      const expertData = data.filter((d) => d.roleCategory == "Data Roles");

      return {
        rolesData: expertData,
      };
    } else {
      return { rolesData: [] };
    }
  };

  let appRoleData = extractData(data, "App Roles");
  const infraRoleData = extractData(data, "Infra Roles");
  const dataRoleData = extractData(data, "Data Roles");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "App Roles"}
        onChange={handleChange("App Roles")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="menueHeader" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="menueHeader"
        >
          App Roles
        </AccordionSummary>
        <AccordionDetails>
          {appRoleData.rolesData.map((obj, index) => {
            return (
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  selected={selectedIndex === obj.roleId}
                  onClick={(event) => handleListItemClick(event, obj.roleId)}
                >
                  <Link className="linkClass" to={`/roles/${obj.roleId}`}>
                    {obj.courseName}
                  </Link>
                </ListItemButton>
              </List>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "Infra Roles"}
        onChange={handleChange("Infra Roles")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="menueHeader" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="menueHeader"
        >
          Infra Roles
        </AccordionSummary>
        <AccordionDetails>
          {infraRoleData.rolesData.map((obj, index) => {
            return (
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  selected={selectedIndex === obj.roleId}
                  onClick={(event) => handleListItemClick(event, obj.roleId)}
                >
                  <Link className="linkClass" to={`/roles/${obj.roleId}`}>
                    {obj.courseName}
                  </Link>
                </ListItemButton>
              </List>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "Data Roles"}
        onChange={handleChange("Data Roles")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="menueHeader" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="menueHeader"
        >
          Data Roles
        </AccordionSummary>
        <AccordionDetails>
          {dataRoleData.rolesData.map((obj, index) => {
            return (
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  selected={selectedIndex === obj.roleId}
                  onClick={(event) => handleListItemClick(event, obj.roleId)}
                >
                  <Link className="linkClass" to={`/roles/${obj.roleId}`}>
                    {obj.courseName}
                  </Link>
                </ListItemButton>
              </List>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default RolesMenu;

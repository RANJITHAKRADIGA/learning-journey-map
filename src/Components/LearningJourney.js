import React from "react";
import JourneyCard from "./JourneyCard";
import { Box, Typography } from "@mui/material";
import { learningData } from "../data";
import "../ComponentCSS/LearningJourney.css";

function LearningJourney() {
  const data = learningData;

  const extractData = (data, key) => {
    if (key === "Expert") {
      const expertData = data.filter((d) => d.proficiency == "Expert");
      const expertAppRoles = expertData.filter(
        (d) => d.roleCategory == "App Roles"
      );
      const expertInfraRoles = expertData.filter(
        (d) => d.roleCategory == "Infra Roles"
      );
      const expertDataRoles = expertData.filter(
        (d) => d.roleCategory == "Data Roles"
      );
      return {
        appRoles: expertAppRoles,
        infraRoles: expertInfraRoles,
        dataRoles: expertDataRoles,
      };
    } else if (key === "Beginner") {
      const expertData = data.filter((d) => d.proficiency == "Beginner");
      const expertAppRoles = expertData.filter(
        (d) => d.roleCategory == "App Roles"
      );
      const expertInfraRoles = expertData.filter(
        (d) => d.roleCategory == "Infra Roles"
      );
      const expertDataRoles = expertData.filter(
        (d) => d.roleCategory == "Data Roles"
      );
      return {
        appRoles: expertAppRoles,
        infraRoles: expertInfraRoles,
        dataRoles: expertDataRoles,
      };
    } else if (key === "Intermediate") {
      const expertData = data.filter((d) => d.proficiency == "Intermediate");
      const expertAppRoles = expertData.filter(
        (d) => d.roleCategory === "App Roles"
      );
      const expertInfraRoles = expertData.filter(
        (d) => d.roleCategory === "Infra Roles"
      );
      const expertDataRoles = expertData.filter(
        (d) => d.roleCategory === "Data Roles"
      );
      return {
        appRoles: expertAppRoles,
        infraRoles: expertInfraRoles,
        dataRoles: expertDataRoles,
      };
    } else {
      return { appRoles: [], infraRoles: [], dataRoles: [] };
    }
  };
  let expertData = extractData(data, "Expert");
  const beginnerData = extractData(data, "Beginner");
  const intermediateData = extractData(data, "Intermediate");

  if (Object.keys(data).length === 0) {
    return <p>No Data To Display</p>;
  } else {
    return (
      <div style={{ marginLeft: "80px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography variant="subtitle2" gutterBottom className="subHeading">
            Proficiency
          </Typography>
          <Typography variant="subtitle2" gutterBottom className="subHeading">
            Apps Roles
          </Typography>
          <Typography variant="subtitle2" gutterBottom className="subHeading">
            Infra Roles
          </Typography>
          <Typography variant="subtitle2" gutterBottom className="subHeading">
            Data Roles
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <JourneyCard
            category="Expert"
            cardObj="Expert"
            cardTextType="heading"
          />
          <JourneyCard
            category="AppRoles"
            cardObj={expertData.appRoles}
            cardTextType="links"
          />
          <JourneyCard
            category="InfraRoles"
            cardObj={expertData.infraRoles}
            cardTextType="links"
          />{" "}
          <JourneyCard
            category="DataRoles"
            cardObj={expertData.dataRoles}
            cardTextType="links"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <JourneyCard
            category="Intermediate"
            cardObj="Intermediate"
            cardTextType="heading"
          />
          <JourneyCard
            category="AppRoles"
            cardObj={intermediateData.appRoles}
            cardTextType="links"
          />
          <JourneyCard
            category="InfraRoles"
            cardObj={intermediateData.infraRoles}
            cardTextType="links"
          />{" "}
          <JourneyCard
            category="DataRoles"
            cardObj={intermediateData.dataRoles}
            cardTextType="links"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <JourneyCard
            category="Beginner"
            cardObj="Beginner"
            cardTextType="heading"
          />
          <JourneyCard
            category="AppRoles"
            cardObj={beginnerData.appRoles}
            cardTextType="links"
          />
          <JourneyCard
            category="InfraRoles"
            cardObj={beginnerData.infraRoles}
            cardTextType="links"
          />{" "}
          <JourneyCard
            category="DataRoles"
            cardObj={beginnerData.dataRoles}
            cardTextType="links"
          />
        </Box>
      </div>
    );
  }
}

export default LearningJourney;

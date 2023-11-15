import React from "react";
import LearningJourney from "./LearningJourney";
import Roles from "./Roles";
import { Grid } from "@mui/material";

function Contents(props) {
  const tabValue = props.tabValue;
  return (
    <div>
      <Grid item xs={12} md={12}>
        {(() => {
          if (tabValue === "Learning Journey") {
            return <LearningJourney />;
          } else {
            return <Roles />;
          }
        })()}
      </Grid>
    </div>
  );
}

export default Contents;

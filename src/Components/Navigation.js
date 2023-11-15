import React, { useEffect } from "react";
import "../ComponentCSS/Navigation.css";
import { Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import LearningJourney from "./LearningJourney";
import Roles from "./Roles";

function Navigation(props) {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    setValue(props.tabIndex);
  }, [props.tabIndex]);

  function handleChange(event, val) {
    let url = "/journey";
    if (val === "2") {
      url = "/roles/1";
    }
    setValue(String(val));
    navigate(url);
  }
  return (
    <div>
      <TabContext value={value}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} className="navigationMenu">
            <TabList
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              variant="standard"
            >
              <Tab label="Learning Journey" className="tabStyle" value="1" />
              <Tab label="Roles" value="2" />
            </TabList>
          </Grid>

          <Grid item xs={12} md={12}>
            <TabPanel value="1">
              <LearningJourney />
            </TabPanel>
            <TabPanel value="2">
              <Roles />
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </div>
  );
}

export default Navigation;

import { Grid } from "@mui/material";
import React from "react";
import RolesMenu from "./RolesMenu";
import RolesContent from "./RolesContent";
import { useParams } from "react-router-dom";

function Roles(props) {
  const [selectedRoleId, setSelectedRoleId] = React.useState("1");
  const { roleId, setRoleId } = useParams();
  const handleSelectedRoleId = (roleId) => {
    setSelectedRoleId(roleId);
  };
  return (
    <div style={{ marginLeft: "100px", marginTop: "10px" }}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <RolesMenu
            sendRoleId={handleSelectedRoleId}
            selectedRoleId={roleId}
          />
        </Grid>
        <Grid item xs={8}>
          <RolesContent selectedRoleId={roleId} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Roles;

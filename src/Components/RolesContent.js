import React, { useEffect } from "react";
import "../ComponentCSS/RolesContent.css";
import { Grid } from "@mui/material";
import { learningData } from "../data";

function RolesContent(props) {
  const [selectedRoleId, SetSelectedRoleId] = React.useState(
    props.selectedRoleId
  );
  const [data, setData] = React.useState(
    learningData.filter((i) => i.roleId == props.selectedRoleId)[0]
  );
  useEffect(() => {
    SetSelectedRoleId(props.selectedRoleId);
    setData(learningData.filter((i) => i.roleId == props.selectedRoleId)[0]);
  }, [props.selectedRoleId]);

  if (data != {}) {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>{data.courseName}</p>
            <table className="table">
              <thead>
                <tr>
                  <td class="table-td">
                    <b>Proficiency</b>
                  </td>
                  <td class="table-td">{data.proficiency}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Course Duration:</b>
                  </td>
                  <td>{data.courseDuration}</td>
                </tr>
                <tr>
                  <td>
                    <b>Experience:</b>
                  </td>
                  <td>
                    <ol>
                      {data.experience?.map((i) => {
                        return <li>{i}</li>;
                      })}
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Employee Grade</b>
                  </td>
                  <td>{data.employeeGrade}</td>
                </tr>
                <tr>
                  <td>
                    <b>Professional Certification:</b>
                  </td>
                  <td>{data.professionalCertification}</td>
                </tr>
                <tr>
                  <td>
                    <b>Internal Certification:</b>
                    <br />
                    (Capgemini Standard Certification)
                  </td>
                  <td>{data.internalCertification}</td>
                </tr>
                <tr>
                  <td>
                    <b>What will you learn?</b>
                    <br />
                    (Mandatory skills)
                  </td>
                  <td>
                    <ol>
                      {data.mandatorySkills?.map((i) => {
                        return <li>{i}</li>;
                      })}
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>What will you learn?</b>
                    <br />
                    (Good to Have Skills)
                  </td>
                  <td>
                    <ol>
                      {data.goodToHaveSkills?.map((i) => {
                        return <li>{i}</li>;
                      })}
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return "Something went wrong";
  }
}

export default RolesContent;

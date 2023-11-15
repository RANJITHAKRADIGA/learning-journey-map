import { Box } from "@mui/material";
import React from "react";
import "../ComponentCSS/JourneyCard.css";
import { Link, useNavigate } from "react-router-dom";

function JourneyCard(props) {
  const cardCategory = props.category;
  const cardTextObjects = props.cardObj;
  const cardTextType = props.cardTextType;
  const navigate = useNavigate();

  let cardCol = "#0070AD";
  switch (cardCategory) {
    case "AppRoles":
      cardCol = "#0070AD";
      break;
    case "InfraRoles":
      cardCol = "#13ABDC";
      break;
    case "DataRoles":
      cardCol = "#5FC2E1";
      break;
    case "Expert":
      cardCol = "#0070AD";
      break;
    case "Intermediate":
      cardCol = "#13ABDC";
      break;
    case "Beginner":
      cardCol = "#5FC2E1";
      break;
    default:
      cardCol = "#0070AD";
  }

  const handleClick = (id) => {
    navigate("/roles/" + id);
  };
  return (
    <div>
      <Box
        sx={{
          width: 250,
          height: 180,
          borderRadius: 1,
          bgcolor: cardCol,
          margin: "15px",
        }}
      >
        {(() => {
          if (cardTextType === "heading") {
            return <div className="cardHeading">{cardTextObjects}</div>;
          } else {
            return (
              <div className="cardLinks">
                <ul>
                  {cardTextObjects.map((obj) => {
                    return (
                      <li className="list">
                        <Link to={`/roles/${obj.roleId}`}>
                          {obj.courseName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })()}
      </Box>
    </div>
  );
}

export default JourneyCard;

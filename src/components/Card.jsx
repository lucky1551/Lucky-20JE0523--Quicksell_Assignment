import React from "react";
import "../styles/Card.css";
import {BsExclamationSquareFill} from "react-icons/bs"
import lucky from "../images/omg.jpeg"
const Card = ({ id, title, tags, status }) => {
  const statusColors = ["green", "yellow", "silver"];
const randomColor = statusColors[Math.floor(Math.random() * statusColors.length)];
  const statusColor = getStatusColor(randomColor);
  return (
    <div className="container pop-on-hover">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src={lucky}
            alt="lucky"
          />

<div className="status" style={{ background: statusColor }}></div>

        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags ">
        <div className="tag2">
          <BsExclamationSquareFill /> 
          {/* <span style={{ letterSpacing: "2px", fontSize:"5"}}>...</span> */}
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span>●</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};


const getStatusColor = (status) => {
  switch (status) {
    case "green":
      return "green";
    case "yellow":
      return "#FFDB58";
    case "silver":
      return "silver";
    default:
      return "silver"; // Default to grey if the status is not recognized
  }
};
export default Card;

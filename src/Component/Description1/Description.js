import React from "react";
import "./Description.css";
import GridViewIcon from "@mui/icons-material/GridView";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Description = () => {
  return (
    <div className="Description-container">
      <div className="Description-content">
        <h1>Choose the Best CFA® Exam Prep Study Package for You</h1>
        <p>
          Give yourself the absolute best chance to pass the exam with a
          complete CFA exam prep package. You also get access to a thriving
          community forum and our PassProtection™ guarantee.
        </p>
        <div className="Description-cards">
          <div className="cardss">
            <p>CFA level 1</p>
            <ArrowForwardIosIcon/>
          </div>
          <div className="cardss">
            <p>CFA level 1</p>
            <ArrowForwardIosIcon/>
          </div>
          <div className="cardss">
            <p>CFA level 1</p>
            <ArrowForwardIosIcon/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Description;

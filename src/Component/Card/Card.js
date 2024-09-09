import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpIcon from "@mui/icons-material/Help";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import "./Card.css";
const Card = ({main}) => {
    console.log(main , "this is main")
  return (
    <div className= {main ? "card-container" : "card-conttainer" }>
      <div className="card-wrapper">
        <h2>Essential</h2>
        <div className="price">
          <div className="old-price">
            <AttachMoneyIcon style={{ height: "15px" }} />
            <h2>699</h2>
          </div>
          <div className="new-price">
            <AttachMoneyIcon style={{ height: "15px" }} />
            <h2>699</h2>
          </div>
        </div>
        <div className="selections">
          <select className="styled-select">
            <option value="days">level l august 2024</option>
            <option value="hours">level ll august 2024</option>
            <option value="minutes">level lll august 2024</option>
            <option value="seconds">level l februray 2025</option>
            <option value="minutes">level ll february 2025</option>
            <option value="seconds">level lll february 2025</option>
            <option value="minutes">level ll february 2024</option>
            <option value="seconds">level lll august 2024</option>
            <option value="minutes">level l may 2025</option>
            <option value="seconds">level ll may 2025</option>
          </select>
          <button className="styled-button">start free trial</button>
          
        </div>
       <hr/>
        <div className="offer-descripion">
          <div className="announcement">
            <h4>CFA 2025 CURRICULUM</h4>
            <HelpIcon style={{ width: "20px" }} />
          </div>

          <div className="info">
            <CheckIcon   style={{ color : "blue" }} />
            <h4>All content and features</h4>
          </div>
          <div className="info">
            <CheckIcon   style={{ color : "blue" }} />
            <h4>100% Money back guarantee</h4>
          </div>
          <div className="info">
          <CheckIcon   style={{ color : "blue" }} />
            <h4>7 full exams</h4>
          </div>
          <div className="info">
            <ClearIcon style={{color : "#8299ff"}} />
            <h4>No Ask-a-Tutor questions</h4>
          </div>
        </div>
      </div>
      <div className=  {main ? 'popular': 'main-popular' } >
        <StarIcon style={{ height: "14px" , color : "gold" }} />
        <h5>MOST POPULAR</h5>
      </div>
    </div>
  );
};

export default Card;

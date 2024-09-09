import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "./Intro.css";
const Intro = ({ className }) => {
  return (
    <div className={`Intro-Container ${className}`}>
      <div className="Intro-Wrapper">
        <div className="top">
          <div className="top-leftt">
            <h2>Nauka</h2>
            <h2>
              Exam Prep <span>|</span> <span>CFA program</span>
            </h2>
          </div>
          <div className="top-right">
            <div className="tabs">
              <GridViewIcon style={{  color : 'black'}} />
              <h4>other courses</h4>
            </div>
            <div className="tabs">
              <LocalLibraryIcon style={{ color : 'black'}}  />
              <h4>blog</h4>
            </div>
            <div className="tabs">
              <HelpIcon  style={{color : 'black'}}  />
              <h4>support</h4>
            </div>
         
              <Link to= "/signin"  style={{ textDecoration: 'none' }}>
              <div className="tabs">
              <LoginIcon style={{color : 'black'}}  />
              <h4>login</h4>
              </div>
              </Link>
          
            
          </div>
        </div>

        <div className="bottom">
          <h1>The questes way to get </h1>
          <h1>your CFA charter</h1>
          <p>
            Save precious time by preparing faster and passing the exam on your
            first attempt, thanks
          </p>
          <p>
            to our adaptive learning technology, premium content, and elite
            tutors.
          </p>

          <div className="announcement">
            <h4>CFA 2025 CURRICULUM</h4>
            <HelpIcon style={{width : "20px"}} />
          </div>

          <div className="bottom-options">
            <select>
              <option className="amit" value="days">level l august 2024</option>
              <option value="hours">level ll august 2024</option>
              <option value="minutes">level lll august 2024</option>
              <option value="seconds">level l feb 2025</option>
              <option value="minutes">level ll feb 2025</option>
              <option value="seconds">level lll feb 2025</option>
              <option value="minutes">level ll feb2024</option>
              <option value="seconds">level lll august 2024</option>
              <option value="minutes">level l may 2025</option>
              <option value="seconds">level ll may 2025</option>
            </select>

            <button>start free trail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

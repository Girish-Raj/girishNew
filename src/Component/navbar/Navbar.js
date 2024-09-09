import React from 'react';
import "./Navbar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = ({ isVisible }) => {
  return (
    <div className={`navbar-container ${isVisible ? 'visible' : ''}`}>
    
    <div className="navbar-wrapper">
          <div className="top-left-wrapper">
            <h2>Nauka</h2>
            <h2>
              Exam Prep  <span>CFA program</span>
            </h2>
          </div>
          <div className="top-right-wrapper">
            <div className='multiple-tabs'>
            <div className="tabs">
              <GridViewIcon style={{  color : "black"}} />
              <h4>other courses</h4>
            </div>
            <div className="tabs">
              <LocalLibraryIcon style={{  color : "black"}} />
              <h4>blog</h4>
            </div>
            <div className="tabs">
              <HelpIcon style={{  color : "black"}} />
              <h4>support</h4>
            </div>
            <div className="tabs">
              <LoginIcon style={{  color : "black"}} />
              <h4>login</h4>
            </div>
            </div>
            </div>

            <div className='top-leftt-wrapper'>
            <div className="options">
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

export default Navbar;
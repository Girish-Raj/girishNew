import React from "react";
import "./Card2.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Card2 = (props) => {
  // Destructure the icon prop and assign it to a variable
  const { heading,width, price, paragraph, icon: Icon } = props;

  return (
    <div className={width=="false"?"card2-containers":"card2-container"}>
      {/* Render the dynamic icon passed via props */}
      <Icon className="EmojiEventsIcon " />
      <h1>{heading}</h1>
      {
        width=="false"?"":<h5>
        Starting at <span>${price}</span>
      </h5>
      }
      
      <p className="paragraph">
        {paragraph}
      </p>
      <div className="all-cards">
        <div className="cards">
          <p>Level 1</p>
          <ArrowForwardIosIcon />
        </div>
        <div className="cards">
          <p>Level 2</p>
          <ArrowForwardIosIcon />
        </div>
        <div className="cards">
          <p>Level 3</p>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Card2;

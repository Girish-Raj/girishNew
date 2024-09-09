import React from "react";
import "./Description2.css";

import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Card2 from "../Card2/Card2";
import { data1 } from "../../Data/Data";
const Description2 = () => {
  return (
    <div className="Description2-container">
      <div className="Description2-wrapper">
        {data1 &&
          data1.map((ele, index) => (
            <Card2
              key={index}
              heading={ele.heading}
              price={ele.price}
              paragraph={ele.paragraph}
              icon={ele.icon}
            />
          ))}
      </div>

      <div className="availability-section">
        <h2>Product Availability</h2>
        <KeyboardDoubleArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Description2;

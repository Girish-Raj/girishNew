import React from "react";
import "./Description.css"
import Card2 from "../Card2/Card2";
import { data2 } from "../../Data/Data";

const Description3 = () => {
  return (
    <div className="Description3-container">
      <h1>More Insights. Clear Direction. Better Results.</h1>
      <p>
        No guessing how you should prepare for the CFA® exam. We’ve formulated
        an adaptive study program that works and adjusts for you. More CFA Level
        I and II candidates consider Kaplan Schweser to be the highest-quality,
        most comprehensive, and easiest-to-use CFA exam prep provider in the
        industry
      </p>
      <div className="Description2-wrapper">
        {data2 &&
          data2.map((ele, index) => (
            <Card2
              key={index}
              heading={ele.heading}
              width = {ele.width}
              price={ele.price}
              paragraph={ele.paragraph}
              icon={ele.icon}
             
            />
          ))}
      </div>
    </div>
  );
};

export default Description3;

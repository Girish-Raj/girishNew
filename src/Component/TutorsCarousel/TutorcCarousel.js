import React from "react";
import "./TutorsCarousel.css";
import { data } from "../../Data";


const TutorcCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-Wrapper">
        <h1>Meet Your Tutors</h1>
        <h1>
          Bloomberg’s CFA® Exam Prep platform allows you to ask questions
          directly of our tutors.
        </h1>
         
        {data.map((tutor, index) => (
          <div key={index} className="content-card">
            <div className="images">
              <img src={tutor.img} alt={tutor.name} />
            </div>
            <div className="content-wrapperr">
              <h2>{tutor.name}</h2>
              <p>{tutor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorcCarousel;

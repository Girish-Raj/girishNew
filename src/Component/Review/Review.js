import React from "react";
import "./Review.css";
const Review = () => {
  return (
    <div class="Review-container">
      <div className="slanted-card">
        <p>Crafting Excellence. Creating Future.</p>
        <h1>Don't Take Our Word For It</h1>
        <h3>See what our reviews have to say…</h3>
        <div className="slanted-sub-cards">
          <div className="slanted-sub-card">
            <img src="https://www.edzeb.com/webp-img/trustpilot.webp" />
            <h2>4/5</h2>
          </div>
          <div className="slanted-sub-card sulekha">
            <img src="https://www.edzeb.com/webp-img/sulekha-logo.webp"/>
            <h2>4/5</h2>
          </div>
          <div className="slanted-sub-card">
            <img src="https://www.edzeb.com/webp-img/google.webp"/>
            <h2>4/5</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
